import React, { memo } from 'react';
import { NavBar } from 'react-vant';

const CommonNavBar: React.FC = memo(() => {
  return (
    <div style={{ flexShrink: 0 }}>
      <NavBar title={'TextRPG'} leftArrow={false} />
    </div>
  );
});

export default CommonNavBar;
