import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIValue: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M20 9H25.22C21.9 3.91 15.09 2.47 10 5.78C6.88 7.81 5 11.28 5 15H3C3 7.82 8.82 2 16 2C19.86 2 23.53 3.72 26 6.68V3H28V11H20V9Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 15H22C20.9 15 20 15.9 20 17V29H22V24H26V29H28V17C28 15.9 27.1 15 26 15ZM22 22V17H26V22H22Z"
      fill="#7E848A"
    />
    <path
      d="M6.78 21C8.89 24.24 12.41 26 16 26V28C12.14 27.99 8.47 26.28 6 23.31V27H4V19H12V21H6.78Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
