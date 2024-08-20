import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import CurrencyBar from '@/components/CurrencyBar';
import styles from './index.module.scss';
import BattlePanel from '@/components/BattlePanel';

const Main: React.FC = memo(() => {
  return (
    <div className={styles.mainWrapper}>
      <CurrencyBar />
      <div className={styles.pageContent}>
        <Outlet />
      </div>

      <BattlePanel />
    </div>
  );
});

export default Main;
