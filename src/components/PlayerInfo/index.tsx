import React, { memo } from 'react';
import { usePlayer } from '../../store';
import { Card, Image } from 'react-vant';
import styles from './index.module.scss';
import Avatar from '../../assets/avatar/04.jpg';
import ValueBar from '../ValueBar';

const PlayerInfo: React.FC = memo(() => {
  const { player } = usePlayer();
  return (
    <Card className={styles.playerInfoWrapper}>
      <Card.Body className={styles.playerInfoContent} style={{ paddingTop: 0 }}>
        <div className={styles.avatar}>
          <Image src={Avatar} style={{ width: '80px', height: '80px' }} round />
        </div>

        <div className={styles.playerInfo}>
          <div className={styles.playerName}>{player.name}</div>
          <div className={styles.playerInfoDetail}>
            <div className={styles.letf}>
              <div>等级: {player.level}</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>生命值:</span>
                <ValueBar value={player.hp} maxValue={player.maxHp} color="red" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>魔法值:</span>
                <ValueBar value={player.mp} maxValue={player.maxMp} color="blue" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>经验值:</span>
                <ValueBar value={player.exp} maxValue={player.maxExp} color="green" />
              </div>
            </div>
            <div className={styles.right}>
              <div>攻击力: {player.attack}</div>
              <div>防御力: {player.attack}</div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
});

export default PlayerInfo;
