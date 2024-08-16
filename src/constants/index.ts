import { Player } from '../store';

export const SECRET = '1118';
export const DEFAULT_PLAYER_INFO: Player = {
  name: '',
  level: 1,
  hp: 100,
  maxHp: 100,
  exp: 0,
  maxExp: 100,
  gold: 0
};

export const REGION_LIST = [
  {
    id: 1,
    name: 'a',
    desc: 'AA',
    levelLimit: 1
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
