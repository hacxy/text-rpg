import React, { memo } from 'react';
import { Progress } from 'react-vant';
import { calculatePercentage } from '../../utils/compute';
interface Props {
  value: number;
  maxValue: number;
  color?: string;
}
const ValueBar: React.FC<Props> = memo((props) => {
  const { value, maxValue, color } = props;
  return (
    <Progress
      color={color}
      strokeWidth={10}
      style={{ width: '25%', minWidth: '130px', marginBottom: '-3px', border: '1px solid #333' }}
      percentage={calculatePercentage(value, maxValue)}
      showPivot={false}
    />
  );
});

export default ValueBar;
