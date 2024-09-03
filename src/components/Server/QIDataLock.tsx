import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDataLock: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4C14.8954 4 14 4.89543 14 6V10H18V6C18 4.89543 17.1046 4 16 4ZM12 6V10H11C9.89 10 9 10.89 9 12V20C9 21.11 9.89 22 11 22H21C22.11 22 23 21.11 23 20V12C23 10.89 22.11 10 21 10H20V6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6ZM19 12H20H21V20H11V12H12H14H18H19ZM28 20H26V22H28V28H4V22H6V20H4C2.9 20 2 20.9 2 22V28C2 29.1 2.9 30 4 30H28C29.1 30 30 29.1 30 28V22C30 20.9 29.1 20 28 20ZM7 26C7.55228 26 8 25.5523 8 25C8 24.4477 7.55228 24 7 24C6.44772 24 6 24.4477 6 25C6 25.5523 6.44772 26 7 26Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
