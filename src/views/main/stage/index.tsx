import React, { memo } from 'react';
import styles from './index.module.scss';
import { Card, Cell } from 'react-vant';
import { battle } from '@/store/battle';
import { Monster } from '@/store/monster';

const Stage: React.FC = memo(() => {
  return (
    <div className={styles.stageWrapper}>
      <div className={styles.stageContent}>
        <Card round>
          <Card.Body>
            <Cell.Group>
              <Cell
                title="蜘蛛"
                label="等级: 10"
                clickable
                onClick={() => battle.startBattle(new Monster('蜘蛛', 1))}
              />
            </Cell.Group>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
});

export default Stage;
