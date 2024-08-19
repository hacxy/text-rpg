import { Player } from '../store';

export const SECRET = '1118';

export const DEFAULT_PLAYER_INFO: Player = {
  name: '',
  level: 1,
  hp: 100,
  maxHp: 100,
  mp: 100,
  maxMp: 100,
  exp: 0,
  maxExp: 100,
  gold: 0,
  attack: 10,
  defense: 10,
  str: 10,
  agi: 10,
  int: 10
};

export const REGION_LIST = [
  {
    id: 1,
    name: '丛林',
    desc: '郊外的丛林',
    levelLimit: 1,
    monsters: [
      {
        id: 1
      }
    ]
  },
  {
    id: 2,
    name: 'b',
    desc: 'BB',
    levelLimit: 10
  },
  {
    id: 3,
    name: 'c',
    desc: 'CC',
    levelLimit: 20
  },
  {
    id: 4,
    name: 'd',
    desc: 'DD',
    levelLimit: 30
  },
  {
    id: 5,
    name: 'e',
    desc: 'EE',
    levelLimit: 40
  },
  {
    id: 6,
    name: 'f',
    desc: 'FF',
    levelLimit: 50
  }
];

export const MONSTER_LIST = [
  {
    id: 1,
    name: '蜘蛛',
    level: 10
  }
];
