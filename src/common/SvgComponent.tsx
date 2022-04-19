import * as React from 'react';
import { CommonSVGComponent } from '../typings';

const SvgComponent: CommonSVGComponent = ({
  fontSize = '1em',
  style = {},
  viewBox,
  children,
  ...rest
}) => {
  return (
    <svg
      viewBox={viewBox}
      style={style}
      width={fontSize}
      height={fontSize}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default SvgComponent;
