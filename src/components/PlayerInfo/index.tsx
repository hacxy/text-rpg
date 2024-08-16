import React, { memo } from 'react';
import { usePlayer } from '../../store';
import ExpBar from './cpns/ExpBar';
import { Card, Image } from 'react-vant';
import styles from './index.module.scss';
import Avatar from '../../assets/avatar/04.jpg';
const PlayerInfo: React.FC = memo(() => {
  const { player } = usePlayer();
  return (
    <Card className={styles.playerInfoWrapper}>
      <Card.Body style={{ paddingTop: 0 }}>
        <div className={styles.avatar}>
          <Image src={Avatar} style={{ width: '100px', height: '100px' }} />
        </div>
        <div>{player.name}</div>
        <div>等级: {player.level}</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>经验:</span> <ExpBar />
        </div>
      </Card.Body>
    </Card>
  );
});

export default PlayerInfo;
