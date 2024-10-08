import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDataChild: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 10C30 11.1 29.1 12 28 12H17V16H23C24.1 16 25 16.9 25 18V22H28C29.1 22 30 22.9 30 24V28C30 29.1 29.1 30 28 30H20C18.9 30 18 29.1 18 28V24C18 22.9 18.9 22 20 22H23V18H9V22H12C13.1 22 14 22.9 14 24V28C14 29.1 13.1 30 12 30H4C2.9 30 2 29.1 2 28V24C2 22.9 2.9 22 4 22H7V18C7 16.9 7.9 16 9 16H15V12H4C2.9 12 2 11.1 2 10V4C2 2.9 2.9 2 4 2H28C29.1 2 30 2.9 30 4V10ZM4 24V28H12V24H4ZM20 28H28V24H20V28ZM28 4H4V10H28V4ZM8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
