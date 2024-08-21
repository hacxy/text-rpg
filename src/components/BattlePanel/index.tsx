import React from 'react';
import { Popup } from 'react-vant';
import PalyerCard from './cpns/PlayerCard';
import MonsterCard from './cpns/MonsterCard';
import BattleLog from './cpns/BattleLog';
import styles from './index.module.scss';
import { observer } from 'mobx-react-lite';
import { battle } from '@/store/battle';

// interface Props {
//   visible: boolean;
//   onClose: () => void;
// }

// 战斗面板
const BattlePanel: React.FC = observer(() => {
  // const { visible, onClose } = props;
  // let timer: number;

  // useEffect(() => {
  //   if (!timer && visible) {
  //     // timer = setInterval(() => {
  //     //   // console.log(monster.attackTarget(player));
  //     //   console.log(player.attackTarget(monster));
  //     // }, 1000);
  //   }
  // }, [visible]);
  return (
    <Popup
      visible={battle.openPanel}
      lockScroll
      className={styles.battlePanel}
      style={{ width: '90%', height: '90%', padding: 10 }}
      closeOnClickOverlay={false}
      title="战斗"
      round
    >
      <MonsterCard monster={battle.currentMonster} />
      <PalyerCard />
      <BattleLog />
    </Popup>
  );
});

export default BattlePanel;
