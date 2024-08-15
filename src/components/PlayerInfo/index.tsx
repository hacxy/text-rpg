import React, { memo } from 'react';
import { usePlayer } from '../../store';
import ExpBar from './cpns/ExpBar';
import { Card } from 'react-vant';

const PlayerInfo: React.FC = memo(() => {
  const { player } = usePlayer();
  return (
    <Card>
      <Card.Body style={{ paddingTop: 0 }}>
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
