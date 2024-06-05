import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFlask: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M27.23 23.62L20 13.68V4H22V2H10V4H12V13.67L4.77 23.62C4.27 24.31 4 25.13 4 25.98C4 28.2 5.8 30 8.02 30H23.98C26.2 30 28 28.2 28 25.98C28 25.12 27.73 24.31 27.23 23.62ZM14 14.33V4H18V14.33L20.67 18H11.33L14 14.33ZM23.98 28H8.02C6.91 28 6 27.09 6 25.98C6 25.56 6.14 25.14 6.39 24.79L9.88 20H22.13L25.62 24.79C25.87 25.13 26.01 25.55 26.01 25.98C26.01 27.09 25.1 28 23.99 28H23.98Z"
      fill="#818589"
    />
  </SvgComponent>
);
