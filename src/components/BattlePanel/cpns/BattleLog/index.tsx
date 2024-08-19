import React, { memo } from 'react';
import { Card } from 'react-vant';
import styles from './index.module.scss';
import { Divider } from 'react-vant';
import { useBattle } from '../../../../store/battle';
import chance from 'chance';
const BattleLog: React.FC = memo(() => {
  const { battleLog } = useBattle();
  return (
    <div className={styles.battleLogWrapper}>
      <Divider className={styles.divider}>战斗日志</Divider>
      <Card className={styles.battleLogContent} border>
        {battleLog.map((log) => {
          return <div key={chance().guid()}>{log}</div>;
        })}
      </Card>
    </div>
  );
});
BattleLog.displayName = 'BattleLog';
export default BattleLog;
