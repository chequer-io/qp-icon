import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIResult: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 5H25C26.1 5 27 5.90002 27 7V28C27 29.1101 26.1 30 25 30H7C5.89001 30 5 29.1101 5 28V7C5 5.90002 5.89001 5 7 5H10V4C10 2.90002 10.89 2 12 2H20C21.1 2 22 2.90002 22 4V5ZM20 4H12V8H20V4ZM7 28H25V7H22V10H10V7H7V28ZM14 14.5H22V16.5H14V14.5ZM12 21.5H10V23.5H12V21.5ZM22 21.5H14V23.5H22V21.5ZM12 14.5H10V16.5H12V14.5Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
