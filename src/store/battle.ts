import { atom, useAtom } from 'jotai';

// const battleAtom = atom()
const battleLogAtom = atom<string[]>([]);

export const useBattle = () => {
  const [battleLog, setBattleLog] = useAtom(battleLogAtom);

  const addBattleLog = (log: string) => {
    // 最多保留100条
    setBattleLog((prev) => {
      if (prev.length >= 10) {
        prev.shift();
      }
      return [...prev, log];
    });
  };
  return {
    battleLog,
    addBattleLog
  };
};
