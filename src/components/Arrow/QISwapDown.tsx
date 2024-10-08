import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISwapDown: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 21L16 28L23 21L21.59 19.59L17 24.1718L17 4L15 4L15 24.1718L10.41 19.59L9 21Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
