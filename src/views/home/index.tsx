import React, { memo, useEffect } from 'react';
import PlayerInfo from '../../components/PlayerInfo';
import { usePlayer } from '../../store';
import CurrencyBar from '../../components/CurrencyBar';
import MapPanel from './cpns/MapPanel';
import styles from './index.module.scss';
const Home: React.FC = memo(() => {
  const { loadPlayer, player } = usePlayer();

  useEffect(() => {
    loadPlayer();
  }, [player]);

  return (
    <div className={styles.homeWrapper}>
      <CurrencyBar />
      <PlayerInfo />
      <MapPanel />
    </div>
  );
});

export default Home;
