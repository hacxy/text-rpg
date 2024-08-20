import React, { memo } from 'react';
import PlayerInfo from '../../components/PlayerInfo';
import CurrencyBar from '../../components/CurrencyBar';
import styles from './index.module.scss';
import ActionsBar from './cpns/ActionsBar';
import RegionPanel from './cpns/RegionPanel';

const Home: React.FC = memo(() => {
  return (
    <div className={styles.homeWrapper}>
      <CurrencyBar />
      <PlayerInfo />
      <RegionPanel />
      <ActionsBar />
    </div>
  );
});

export default Home;
