import React from 'react';
import { Card } from 'react-vant';
import styles from './index.module.scss';
import ValueBar from '../../../ValueBar';
import classNames from 'classnames';
import { player } from '../../../../store';
import { observer } from 'mobx-react-lite';

const PalyerCard: React.FC = observer(() => {
  return (
    <Card round border className={styles.playerCard}>
      <Card.Body>
        <div className={classNames(styles.playerInfoItem, styles.playerName)}>{player.name}</div>
        <div className={styles.playerInfoItem}>等级: {player.level}</div>
        <div className={styles.playerInfoItem}>
          生命值: <ValueBar value={player.hp} maxValue={player.maxHp} color="red" />
        </div>
        <div className={styles.playerInfoItem}>
          魔法值: <ValueBar value={player.mp} maxValue={player.maxMp} color="blue" />
        </div>
      </Card.Body>
    </Card>
  );
});

PalyerCard.displayName = 'PalyerCard';
export default PalyerCard;
