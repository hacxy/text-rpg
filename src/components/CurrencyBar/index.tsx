import React, { memo } from 'react';
import { Card } from 'react-vant';
import { usePlayer } from '../../store';
import styles from './index.module.scss';
import IconFont from '../IconFont';

const CurrencyBar: React.FC = memo(() => {
  const { player } = usePlayer();

  return (
    <Card
      className={styles.currencyBarWrapper}
      style={{ padding: '12px 16px', fontSize: 16, fontWeight: 500 }}
    >
      <IconFont fontSize={25} icon="icon-jinbipixel" />
      <span style={{ marginLeft: 4 }}>{player?.gold}</span>
    </Card>
  );
});

export default CurrencyBar;
