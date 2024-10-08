import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDelete: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2H20V4H12V2ZM4 6V8H6V28C6 29.1 6.90002 30 8 30H24C25.1 30 26 29.1 26 28V8H28V6H4ZM8 8H24V28H8V8ZM12 12H14V24H12V12ZM18 12H20V24H18V12Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
