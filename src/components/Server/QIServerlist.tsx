import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerlist: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M22 25C22 24.4477 22.4477 24 23 24C23.5523 24 24 24.4477 24 25C24 25.5523 23.5523 26 23 26C22.4477 26 22 25.5523 22 25Z"
      fill="#7E848A"
    />
    <path
      d="M22 13C22 12.4477 22.4477 12 23 12C23.5523 12 24 12.4477 24 13C24 13.5523 23.5523 14 23 14C22.4477 14 22 13.5523 22 13Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 20H26C27.1 20 28 20.9 28 22V28C28 29.1 27.1 30 26 30L6 30C4.9 30 4 29.1 4 28L4 22C4 20.9 4.9 20 6 20H15V18H6C4.9 18 4 17.1 4 16L4 10C4 8.9 4.9 8 6 8L15 8L15 4L4 4L4 2L28 2V4L17 4L17 8L26 8C27.1 8 28 8.9 28 10V16C28 17.1 27.1 18 26 18H17V20ZM26 28V22L6 22L6 28L26 28ZM26 10V16L6 16L6 10L26 10Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
