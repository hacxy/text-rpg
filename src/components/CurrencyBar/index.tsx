import React from 'react';
import { Card } from 'react-vant';
import styles from './index.module.scss';
import IconFont from '../IconFont';
import { player } from '../../store';
import { observer } from 'mobx-react-lite';

const CurrencyBar: React.FC = observer(() => {
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
