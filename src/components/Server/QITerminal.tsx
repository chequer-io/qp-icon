import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QITerminal: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 4H4C2.9 4 2 4.9 2 6V26C2 27.1 2.9 28 4 28H28C29.1 28 30 27.1 30 26V6C30 4.9 29.1 4 28 4ZM28 6V9H4V6H28ZM4 26V11H28V26H4ZM8 15.41L10.83 18.24L8 21.07L9.42 22.48L13.66 18.24L9.42 14L8 15.41ZM24 22H16V24H24V22Z"
      fill="#818589"
    />
  </SvgComponent>
);
