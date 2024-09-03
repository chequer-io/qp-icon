import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISkipForwardFilled: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 27.8725C3.66 27.9625 3.83 28.0025 4 28.0025C4.17 28.0025 4.35 27.9625 4.5 27.8725L23.5 16.8725C23.81 16.6925 24 16.3625 24 16.0025C24 15.6425 23.81 15.3125 23.5 15.1325L4.5 4.13251C4.19 3.95251 3.81 3.95251 3.5 4.13251C3.19 4.31251 3 4.6425 3 5.0025V27.0025C3 27.3625 3.19 27.6925 3.5 27.8725ZM27 4.00251H29V28.0025H27V4.00251Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
