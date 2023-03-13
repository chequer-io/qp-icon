import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIStopSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 16C2 8.27 8.27 2 16 2C23.73 2 30 8.27 30 16C30 23.73 23.73 30 16 30C8.27 30 2 23.73 2 16ZM20 22C21.1 22 22 21.11 22 20V12C22 10.9 21.1 10 20 10H12C10.9 10 10 10.9 10 12V20C10 21.11 10.9 22 12 22H20ZM20 12H12V20H20V12Z"
      fill="#656C72"
    />
  </SvgComponent>
);
