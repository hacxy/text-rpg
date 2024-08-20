import React, { useRef } from 'react';
import { Card } from 'react-vant';
import styles from './index.module.scss';
import { Divider } from 'react-vant';
import chance from 'chance';
import { battle } from '@/store/battle';
import { observer } from 'mobx-react-lite';
const BattleLog: React.FC = observer(() => {
  const logRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.battleLogWrapper}>
      <Divider className={styles.divider}>战斗日志</Divider>
      <Card border style={{ height: '100%' }}>
        <div className={styles.battleLogContent} ref={logRef}>
          {battle.battleLogs.map((log) => {
            return <div key={chance().guid()}>{log}</div>;
          })}
        </div>
      </Card>
    </div>
  );
});
BattleLog.displayName = 'BattleLog';
export default BattleLog;
