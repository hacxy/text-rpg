import { decrypt, encrypt, getPlayerToken, setPlayerToken } from '../utils';
import { action, autorun, makeAutoObservable } from 'mobx';
import { IPlayer } from './types';

export class Player implements IPlayer {
  name: string; // 名字
  level: number; // 等级
  exp: number; // 经验
  maxExp: number; // 最大经验
  hp: number; // 生命值
  maxHp: number; // 最大生命值
  mp: number;
  maxMp: number;
  attack: number; // 攻击力
  defense: number; // 防御力
  gold: number; // 金币
  str: number; // 力量
  int: number; // 智力
  agi: number; // 敏捷

  constructor() {
    const token = getPlayerToken();
    const init = token ? decrypt(token) : {};
    this.name = init.name || '';
    this.level = init.level || 1;
    this.exp = init.exp || 0;
    this.maxExp = init.maxExp || 100;
    this.hp = init.hp || 100;
    this.maxHp = init.maxHp || 100;
    this.mp = init.mp || 100;
    this.maxMp = init.maxMp || 100;
    this.attack = init.attack || 10;
    this.defense = init.defense || 0;
    this.gold = init.gold || 0;
    this.str = init.str || 0;
    this.int = init.int || 0;
    this.agi = init.agi || 0;

    makeAutoObservable(this, {
      register: action,
      gainExp: action
    });
  }

  gainExp(exp: number) {
    this.exp += exp;
    while (this.exp >= this.maxExp) {
      this.exp -= this.maxExp;
      this.level++;
      this.maxExp = Math.floor(this.maxExp * 1.2);
      this.maxHp = Math.floor(this.maxHp * 1.2);
      this.attack = Math.floor(this.attack * 1.2);
      this.defense = Math.floor(this.defense * 1.2);
      this.hp = this.maxHp;
    }
  }

  register(name: string) {
    this.name = name;
  }
}

export const player = new Player();

autorun(() => {
  if (player.name) {
    setPlayerToken(encrypt(player));
  }
});
