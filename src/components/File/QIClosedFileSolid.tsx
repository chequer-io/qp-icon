import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIClosedFileSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M11.17 4H4C2.9 4 2 4.9 2 6V26C2 27.11 2.9 28 4 28H28C29.11 28 30 27.11 30 26V10C30 8.9 29.11 8 28 8H16L12.59 4.59C12.21 4.21 11.7 4 11.17 4Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
