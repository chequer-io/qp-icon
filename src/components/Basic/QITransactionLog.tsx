import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QITransactionLog: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3H28C29.1 3 30 3.90002 30 5V9C30 10.1 29.1 11 28 11V27C28 28.1 27.1 29 26 29H6C4.90002 29 4 28.1 4 27V11C2.90002 11 2 10.1 2 9V5C2 3.90002 2.90002 3 4 3ZM6 27H26V11H6V27ZM4 9H28V5H4V9ZM12 20H20C21.1 20 22 19.1 22 18V16C22 14.9 21.1 14 20 14H12C10.9 14 10 14.9 10 16V18C10 19.1 10.9 20 12 20ZM12 18V16H20V18H12Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
