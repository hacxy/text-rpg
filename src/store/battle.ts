import { Monster } from '@/store/monster';
import { player } from '@/store/player';
import { action, makeAutoObservable } from 'mobx';

export class Battle {
  battleLogs: string[] = [];
  openPanel = false;
  playerAttackTimer: number = 0;
  monsterAttackTimer: number = 0;
  currentMonster: Monster | null = null;

  constructor() {
    makeAutoObservable(this, {
      startBattle: action,
      endBattle: action,
      addBattleLog: action
    });
  }

  startBattle(monster: Monster) {
    clearInterval(this.playerAttackTimer);
    clearInterval(this.monsterAttackTimer);
    this.battleLogs = [];
    this.openPanel = true;
    this.currentMonster = monster;
    if (player.hp <= 0 || monster.hp <= 0) {
      this.endBattle();
      return;
    }

    this.monsterAttackTimer = setInterval(() => {
      const damage = monster.attackTarget();
      this.addBattleLog(`${monster.name} 攻击了 ${player.name} 造成 ${damage} 点伤害`);
      if (player.hp <= 0) this.endBattle();
    }, 1000);

    this.playerAttackTimer = setInterval(() => {
      const damage = player.attackTarget(monster);
      this.addBattleLog(`${player.name} 攻击了 ${monster.name} 造成 ${damage} 点伤害`);
      if (monster.hp <= 0) this.endBattle();
    }, 1000);
  }

  endBattle() {
    // this.openPanel = false;
    clearInterval(this.playerAttackTimer);
    clearInterval(this.monsterAttackTimer);
    this.addBattleLog('战斗结束');

    if (player.hp <= 0) {
      this.addBattleLog('你被击败了！');
      return false;
    } else {
      this.addBattleLog('你战胜了怪物！');
      return true;
    }
  }

  addBattleLog(log: string) {
    this.battleLogs.push(log);
    if (this.battleLogs.length > 100) {
      this.battleLogs.shift();
    }
  }
}

export const battle = new Battle();
