import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPauseFilled: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6H12C13.1 6 14 6.9 14 8V24C14 25.1 13.1 26 12 26H10C8.9 26 8 25.1 8 24V8C8 6.9 8.9 6 10 6ZM20 6H22C23.1 6 24 6.9 24 8V24C24 25.1 23.1 26 22 26H20C18.9 26 18 25.1 18 24V8C18 6.9 18.9 6 20 6Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
