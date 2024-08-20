import { Player } from '../store';

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
  }

  attackTarget(target: Player) {
    const damage = this.attack - target.defense;
    if (damage > 0) {
      target.hp -= damage;
      return `${this.name}对${target.name}造成了${damage}点伤害`;
    } else {
      return `${this.name}的攻击被${target.name}挡住了`;
    }
  }
}
