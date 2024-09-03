import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerAccount: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4H28C29.1 4 30 4.9 30 6V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V6C2 4.9 2.9 4 4 4ZM28 9V6H4V9H28ZM4 11V26H28V11H4ZM19 14H8V16H19V14ZM21 19H8V21H21V19Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
