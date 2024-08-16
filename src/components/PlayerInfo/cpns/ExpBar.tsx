import React, { memo, useMemo } from 'react';
import { Progress } from 'react-vant';
import { usePlayer } from '../../../store';
import { calculatePercentage } from '../../../utils/compute';

const ExpBar: React.FC = memo(() => {
  const { player } = usePlayer();
  const percentage = useMemo(() => {
    console.log(calculatePercentage(player.exp, player.maxExp));
    return calculatePercentage(player.exp, player.maxExp);
  }, [player]);

  return (
    <Progress
      strokeWidth={10}
      style={{ width: '25%', minWidth: '160px', marginBottom: '-3px', border: '1px solid #333' }}
      percentage={percentage}
      showPivot={false}
    />
  );
});

export default ExpBar;
