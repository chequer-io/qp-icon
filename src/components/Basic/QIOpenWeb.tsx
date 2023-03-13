import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIOpenWeb: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4V2H30V12H28V5.40997L19.41 14L18 12.59L26.59 4H20ZM4 26C4 27.1 4.90002 28 6 28H26C27.1 28 28 27.1 28 26V16H26V26H6V6H16V4H6C4.90002 4 4 4.90002 4 6V26Z"
      fill="#656C72"
    />
  </SvgComponent>
);
