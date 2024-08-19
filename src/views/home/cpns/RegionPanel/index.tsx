import React, { memo } from 'react';
import { Cell, Toast } from 'react-vant';
import classNames from 'classnames';
import styles from './index.module.scss';
import { REGION_LIST } from '../../../../constants';
import IconFont from '../../../../components/IconFont';
import { usePlayer } from '../../../../store';
import { useNavigate } from 'react-router-dom';

const RegionPanel: React.FC = memo(() => {
  const { player } = usePlayer();
  const navigate = useNavigate();
  return (
    <div className={styles.regionPanelWrapper}>
      <Cell.Group card>
        {REGION_LIST.map((item) => {
          return (
            <Cell
              icon={item.levelLimit > 1 && <IconFont icon="icon-stop" fontSize={50} />}
              className={classNames({
                [styles.disabled]: item.levelLimit > player.level
              })}
              onClick={() => {
                if (item.levelLimit > player.level) {
                  Toast('等级不足');
                } else {
                  navigate('/stage');
                }
              }}
              clickable
              key={item.id}
              title={item.name}
              value={`等级：${item.levelLimit}`}
              label={item.desc}
            />
          );
        })}
      </Cell.Group>
    </div>
  );
});

export default RegionPanel;
