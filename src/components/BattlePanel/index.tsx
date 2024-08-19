import React, { memo, useEffect } from 'react';
import { Popup } from 'react-vant';
import PalyerCard from './cpns/PlayerCard';
import MonsterCard from './cpns/MonsterCard';
import BattleLog from './cpns/BattleLog';
import styles from './index.module.scss';
import { useBattle } from '../../store/battle';
interface Props {
  visible: boolean;
  onClose: () => void;
}
// 战斗面板
const BattlePanel: React.FC<Props> = memo((props) => {
  const { visible, onClose } = props;
  const { addBattleLog } = useBattle();
  let timer: number;
  useEffect(() => {
    if (!timer && visible) {
      timer = setInterval(() => {
        addBattleLog('123');
      }, 1000);
    }
  }, [visible]);
  return (
    <Popup
      visible={visible}
      onClose={onClose}
      lockScroll
      className={styles.battlePanel}
      style={{ width: '90%', height: '90%', padding: 10 }}
      closeOnClickOverlay={false}
      title="战斗"
      round
    >
      <MonsterCard />
      <PalyerCard />
      <BattleLog />
    </Popup>
  );
});

export default BattlePanel;
