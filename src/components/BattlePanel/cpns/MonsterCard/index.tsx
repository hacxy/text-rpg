import React from 'react';
import { Card } from 'react-vant';
import ValueBar from '../../../ValueBar';
import styles from './index.module.scss';
import classNames from 'classnames';
import { Monster } from '@/store/monster';
import { observer } from 'mobx-react-lite';
interface Props {
  monster: Monster | null;
}
const MonsterCard: React.FC<Props> = observer((props) => {
  const { monster } = props;

  return (
    <Card className={styles.monsterCard} border round>
      <Card.Body className={styles.monsterCardBody}>
        <div className={classNames(styles.monsterInfoItem, styles.monsterName)}>
          {monster?.name}
        </div>
        <div className={styles.monsterInfoItem}>等级: {monster?.level}</div>
        <div className={styles.monsterInfoItem}>
          血量:
          <ValueBar value={monster?.hp || 0} maxValue={monster?.maxHp || 0} color="red" />
        </div>

        <div className={styles.monsterInfoItem}>
          蓝量:
          <ValueBar value={monster?.mp || 0} maxValue={monster?.maxMp || 0} color="blue" />
        </div>
      </Card.Body>
    </Card>
  );
});

export default MonsterCard;
