import { Monster } from '@/store/monster';
import { player } from '@/store/player';
import { action, makeAutoObservable } from 'mobx';

export class Battle {
  battleLogs: string[] = [];
  openPanel = false;
  playerAttackTimer: number = 0;
  monsterAttackTimer: number = 0;

  constructor() {
    makeAutoObservable(this, {
      startBattle: action,
      endBattle: action,
      addBattleLog: action
    });
  }

  startBattle(monster: Monster) {
    this.openPanel = true;

    this.playerAttackTimer = setInterval(() => {
      console.log('111111');
      player.attackTarget(monster);
      this.addBattleLog(`${player.name} 攻击了 ${monster.name}`);
    }, 1000);

    this.monsterAttackTimer = setInterval(() => {
      console.log('222222');
      monster.attackTarget();
      this.addBattleLog(`${monster.name} 攻击了 ${player.name}`);
    }, 1000);
  }

  endBattle() {
    // this.openPanel = false;
    this.battleLogs = [];
    clearInterval(this.playerAttackTimer);
    clearInterval(this.monsterAttackTimer);
  }

  addBattleLog(log: string) {
    this.battleLogs.push(log);
    if (this.battleLogs.length > 100) {
      this.battleLogs.shift();
    }
  }
}

export const battle = new Battle();
