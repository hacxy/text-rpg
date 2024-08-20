import React, { memo } from 'react';
import { ActionBar } from 'react-vant';
import styles from './index.module.scss';

const ActionsBar: React.FC = memo(() => {
  return (
    <div className={styles.actionBarWrapper}>
      <ActionBar safeAreaInsetBottom style={{ position: 'relative' }}>
        <ActionBar.Button text="人物" style={{ borderRadius: 0 }} />
        <ActionBar.Button text="背包" style={{ borderRadius: 0 }} />
        <ActionBar.Button text="设置" style={{ borderRadius: 0 }} />
      </ActionBar>
    </div>
  );
});

export default ActionsBar;
