import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDataKey: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 22H13.41L19.44 15.97C19.64 15.99 19.82 16 20 16C23.31 16 26 13.31 26 10C26 6.69 23.31 4 20 4C16.69 4 14 6.69 14 10C14 10.18 14.01 10.37 14.03 10.56L8 16.59V22ZM12.59 20H10V17.41L16.18 11.26L16.08 10.74C16.03 10.46 16.01 10.23 16.01 10.01C16.01 7.8 17.8 6.01 20.01 6.01C22.22 6.01 24.01 7.8 24.01 10.01C24.01 12.22 22.22 14.01 20.01 14.01C19.79 14.01 19.56 13.98 19.28 13.93L18.76 13.83L12.59 20ZM20.5 11C21.3284 11 22 10.3284 22 9.5C22 8.67157 21.3284 8 20.5 8C19.6716 8 19 8.67157 19 9.5C19 10.3284 19.6716 11 20.5 11ZM28 20H26V22H28V28H4V22H6V20H4C2.9 20 2 20.9 2 22V28C2 29.1 2.9 30 4 30H28C29.1 30 30 29.1 30 28V22C30 20.9 29.1 20 28 20ZM7 26C7.55228 26 8 25.5523 8 25C8 24.4477 7.55228 24 7 24C6.44772 24 6 24.4477 6 25C6 25.5523 6.44772 26 7 26Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
