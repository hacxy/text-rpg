import React, { memo, useEffect } from 'react';
import PlayerInfo from '../../components/PlayerInfo';
import { usePlayer } from '../../store';
import CurrencyBar from '../../components/CurrencyBar';
import MapPanel from './cpns/MapPanel';
import styles from './index.module.scss';
import ActionsBar from './cpns/ActionsBar';
const Home: React.FC = memo(() => {
  const { loadPlayer } = usePlayer();

  useEffect(() => {
    loadPlayer();
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <CurrencyBar />
      <PlayerInfo />
      <MapPanel />
      <ActionsBar />
    </div>
  );
});

export default Home;
