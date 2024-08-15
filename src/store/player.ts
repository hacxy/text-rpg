import { atom, useAtom } from 'jotai';
import { Player } from './types';
import { decrypt, encrypt, getPlayerToken, setLocalStorage } from '../utils';
import { DEFAULT_PLAYER_INFO } from '../constants';
const playerAtom = atom<Player>(DEFAULT_PLAYER_INFO);

export const usePlayer = () => {
  const [player, setPlayer] = useAtom(playerAtom);

  const update = (player: Player) => {
    const code = encrypt(player);
    setLocalStorage('PLAYER_TOKEN', code);
    setPlayer(player);
  };

  const loadPlayer = () => {
    const code = getPlayerToken();
    if (code) {
      const player = decrypt(code);
      console.log(player);
      setPlayer(player);
    }
  };

  const createPlayer = (name: string) => {
    const newPlayer = {
      ...DEFAULT_PLAYER_INFO,
      name
    };
    update(newPlayer);
  };

  return {
    player,
    setPlayer,
    createPlayer,
    loadPlayer
  };
};
