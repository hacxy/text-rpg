import React, { memo } from 'react';
import styles from './index.module.scss';
import { Cell } from 'react-vant';

const MapPanel: React.FC = memo(() => {
  return (
    <div className={styles.mapPanelWrapper}>
      <Cell.Group>
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />

        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </Cell.Group>
    </div>
  );
});

export default MapPanel;
