import { atom, useAtom } from 'jotai';
// const battleAtom = atom()
const battleLogAtom = atom<string[]>([]);

export const useBattle = () => {
  const [battleLog, setBattleLog] = useAtom(battleLogAtom);

  const startBattle = () => {
    setBattleLog([]);
    // addBattleLog('开始战斗');
  };

  const addBattleLog = (log: string) => {
    // 最多保留100条
    // 如果超过100条，则删除第一条

    setBattleLog((prev) => {
      if (prev.length >= 100) {
        prev.shift();
      }
      return [...prev, log];
    });
  };
  return {
    startBattle,
    battleLog,
    addBattleLog
  };
};
