import React, { memo, useEffect, useState } from 'react';
import CurrencyBar from '../../components/CurrencyBar';
import styles from './index.module.scss';
import { Monster } from '../../entitys/monster';
import { Card, Cell } from 'react-vant';
import BattlePanel from '../../components/BattlePanel';

const Stage: React.FC = memo(() => {
  const [visibleBattlePanel, setVisibleBattlePanel] = useState(false);

  useEffect(() => {
    const monster = new Monster('蜘蛛', 10);
    console.log(monster);
  }, []);
  return (
    <div className={styles.stageWrapper}>
      <CurrencyBar />
      <div className={styles.stageContent}>
        <Card round>
          <Card.Body>
            <Cell.Group>
              <Cell
                title="蜘蛛"
                label="等级: 10"
                clickable
                onClick={() => setVisibleBattlePanel(true)}
              />
            </Cell.Group>
          </Card.Body>
        </Card>
      </div>

      <BattlePanel visible={visibleBattlePanel} onClose={() => setVisibleBattlePanel(false)} />
    </div>
  );
});

export default Stage;
