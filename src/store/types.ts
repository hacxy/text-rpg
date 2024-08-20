export interface IPlayer {
  name: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  exp: number;
  maxExp: number;
  attack: number; // 攻击
  defense: number; // 防御
  gold: number;
  str: number; // 力量
  int: number; // 智力
  agi: number; // 敏捷
}
