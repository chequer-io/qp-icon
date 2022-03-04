import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIArrowDown: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M24.59 16.59L17 24.17V4H15V24.17L7.41003 16.59L6 18L16 28L26 18L24.59 16.59Z"
      fill="black"
    />
  </SvgComponent>
);
