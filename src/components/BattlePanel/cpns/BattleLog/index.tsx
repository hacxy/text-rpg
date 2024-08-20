import React, { memo, useEffect, useRef } from 'react';
import { Card } from 'react-vant';
import styles from './index.module.scss';
import { Divider } from 'react-vant';
import { useBattle } from '../../../../store/battle';
import chance from 'chance';
const BattleLog: React.FC = memo(() => {
  const { battleLog } = useBattle();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [battleLog]);

  return (
    <div className={styles.battleLogWrapper}>
      <Divider className={styles.divider}>战斗日志</Divider>
      <Card border style={{ height: '100%' }}>
        <div className={styles.battleLogContent} ref={logRef}>
          {battleLog.map((log) => {
            return <div key={chance().guid()}>{log}</div>;
          })}
        </div>
      </Card>
    </div>
  );
});
BattleLog.displayName = 'BattleLog';
export default BattleLog;
