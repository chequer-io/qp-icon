import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICalendar: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M26 4H22V2H20V4H12V2H10V4H6C4.89 4 4 4.9 4 6V26C4 27.11 4.89 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.9 27.1 4 26 4ZM26 26H6V12H26V26ZM26 10H6V6H10V8H12V6H20V8H22V6H26V10Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
