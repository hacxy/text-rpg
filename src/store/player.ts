import { atom, useAtom } from 'jotai';
import { Player } from './types';
import { decrypt, encrypt, getPlayerToken, setLocalStorage } from '../utils';
import { DEFAULT_PLAYER_INFO } from '../constants';
import { useEffect } from 'react';
import { PartialDeep } from 'type-fest';
const playerAtom = atom<Player>(DEFAULT_PLAYER_INFO);

export const usePlayer = () => {
  const [player, setPlayer] = useAtom(playerAtom);

  const updatePlayer = (player: PartialDeep<Player>) => {
    setPlayer((preValue) => ({
      ...preValue,
      ...player
    }));
  };

  useEffect(() => {
    if (player.name) {
      const code = encrypt(player);
      setLocalStorage('PLAYER_TOKEN', code);
    }
  }, [player]);

  const loadPlayer = () => {
    const code = getPlayerToken();
    if (code) {
      const player = decrypt(code);
      setPlayer(player);
    }
  };

  const createPlayer = (name: string) => {
    setPlayer((preValue) => ({
      ...preValue,
      name
    }));
  };

  const gainExp = (exp: number) => {
    player.exp += exp;
    while (player.exp >= player.maxExp) {
      player.exp -= player.maxExp;
      player.level++;
      player.maxExp = Math.floor(player.maxExp * 1.2);
      player.maxHp = Math.floor(player.maxHp * 1.2);
      player.hp = player.maxHp;
    }
    updatePlayer(player);
  };

  return {
    player,
    setPlayer,
    gainExp,
    createPlayer,
    loadPlayer
  };
};
