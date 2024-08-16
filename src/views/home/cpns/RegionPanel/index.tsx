import React, { memo } from 'react';
import styles from './index.module.scss';
import { Cell } from 'react-vant';
import { REGION_LIST } from '../../../../constants';
import classNames from 'classnames';
import IconFont from '../../../../components/IconFont';

const RegionPanel: React.FC = memo(() => {
  return (
    <div className={styles.regionPanelWrapper}>
      <Cell.Group card>
        {REGION_LIST.map((item) => {
          return (
            <Cell
              icon={item.levelLimit > 1 && <IconFont icon="icon-stop" fontSize={50} />}
              // extra={item.levelLimit > 1 ? '等级不足' : ''}
              className={classNames({
                [styles.disabled]: item.levelLimit > 1
              })}
              clickable
              key={item.id}
              title={item.name}
              value={item.desc}
              label={`等级：${item.levelLimit}`}
            />
          );
        })}
      </Cell.Group>
    </div>
  );
});

export default RegionPanel;
