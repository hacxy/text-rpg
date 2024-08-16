import React, { memo } from 'react';

interface Props {
  icon: string;
  fontSize?: number;
}
const IconFont: React.FC<Props> = memo((props) => {
  const { icon, fontSize } = props;

  return (
    <svg className="icon" aria-hidden="true" style={{ fontSize }}>
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
});

export default IconFont;
