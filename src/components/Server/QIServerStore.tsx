import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerStore: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 12C28 13.1 27.1 14 26 14H24V18H26C27.1 18 28 18.9 28 20V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V20C4 18.9 4.9 18 6 18H8V14H6C4.9 14 4 13.1 4 12V6C4 4.9 4.9 4 6 4H26C27.1 4 28 4.9 28 6V12ZM26 6H6V12H26V6ZM6 26H26V20H6V26ZM10 18H22V14H10V18ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10ZM10 23C10 23.5523 9.55228 24 9 24C8.44772 24 8 23.5523 8 23C8 22.4477 8.44772 22 9 22C9.55228 22 10 22.4477 10 23Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
