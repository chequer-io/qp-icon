import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIChange: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9C4 5.13 7.13 2 11 2C14.87 2 18 5.13 18 9C18 12.87 14.87 16 11 16C7.13 16 4 12.87 4 9ZM16 9C16 6.23999 13.76 4 11 4C8.24001 4 6 6.23999 6 9C6 11.76 8.24001 14 11 14C13.76 14 16 11.76 16 9Z"
      fill="#656C72"
    />
    <path
      d="M21 30V23C20.99 19.14 15.86 18.01 12 18H10C6.14 18.01 1 19.14 1 23V30H3V23C3 20.24 7.24001 20 10 20H12C14.76 20 19 20.24 19 23V30H21Z"
      fill="#656C72"
    />
    <path
      d="M25.09 11L20 16.09L31 16.09V14.09L24.8282 14.09L26.5 12.41L25.09 11Z"
      fill="#656C72"
    />
    <path
      d="M31 18L25.91 23.09L24.5 21.68L26.1718 20L20 20V18L31 18Z"
      fill="#656C72"
    />
  </SvgComponent>
);
