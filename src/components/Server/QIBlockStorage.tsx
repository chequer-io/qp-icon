import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIBlockStorage: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 12H22V4H14V12ZM12 12V4C12 2.9 12.9 2 14 2H22C23.1 2 24 2.9 24 4V12C24 13.1 23.1 14 22 14H14C12.9 14 12 13.1 12 12ZM9 10V12H4V28H20V19H22V28C22 29.1 21.1 30 20 30H4C2.9 30 2 29.1 2 28V12C2 10.9 2.9 10 4 10H9ZM14 18V22H10V18H14ZM8 18V22C8 23.1 8.9 24 10 24H14C15.1 24 16 23.1 16 22V18C16 16.9 15.1 16 14 16H10C8.9 16 8 16.9 8 18ZM26 19H28V17H26V19ZM24 20V16C24 15.45 24.45 15 25 15H29C29.55 15 30 15.45 30 16V20C30 20.55 29.55 21 29 21H25C24.45 21 24 20.55 24 20Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
