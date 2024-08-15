import React, { memo } from 'react';
import { Card } from 'react-vant';
import { usePlayer } from '../../store';
import styles from './index.module.scss';
const CurrencyBar: React.FC = memo(() => {
  const { player } = usePlayer();
  return (
    <Card
      className={styles.currencyBarWrapper}
      style={{ padding: '12px 16px', fontSize: 16, fontWeight: 500 }}
    >
      <svg className="icon" aria-hidden="true" style={{ fontSize: 25 }}>
        <use xlinkHref="#icon-jinbipixel"></use>
      </svg>
      <span style={{ marginLeft: 4 }}>{player?.gold}</span>
    </Card>
  );
});

export default CurrencyBar;
