import { makeAutoObservable } from 'mobx';
import { player } from './player';
import { battle } from '@/store/battle';

export class Monster {
  name: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  attack: number;
  defense: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
    this.hp = 100 * level;
    this.maxHp = 100 * level;
    this.mp = 100 * level;
    this.maxMp = 100 * level;
    this.attack = 10 * level;
    this.defense = 10 * level;
    makeAutoObservable(this);
  }

  attackTarget() {
    const damage = this.attack - player.defense;
    player.hp -= damage;
    if (player.hp <= 0) {
      player.hp = 0;
      battle.endBattle();
    }

    return damage;
  }
}
