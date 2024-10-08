import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIObjectStorage: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10H10V2H18V10ZM12 8H16V4H12V8ZM22 8H30V16H24V22H16V14H22V8ZM18 20H22V16H18V20ZM24 14H28V10H24V14ZM8 25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24C7.55228 24 8 24.4477 8 25ZM26 20H28C29.1 20 30 20.9 30 22V28C30 29.1 29.1 30 28 30H4C2.9 30 2 29.1 2 28V22C2 20.9 2.9 20 4 20H14V22H4V28H28V22H26V20Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
