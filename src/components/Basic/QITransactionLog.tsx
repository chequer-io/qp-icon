import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QITransactionLog: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4H28C29.1 4 30 4.90002 30 6V10C30 11.1 29.1 12 28 12V26C28 27.1 27.1 28 26 28H6C4.90002 28 4 27.1 4 26V12C2.90002 12 2 11.1 2 10V6C2 4.90002 2.90002 4 4 4ZM6 26H26V12H6V26ZM4 10H28V6H4V10ZM12 20H20C21.1 20 22 19.1 22 18V16C22 14.9 21.1 14 20 14H12C10.9 14 10 14.9 10 16V18C10 19.1 10.9 20 12 20ZM12 18V16H20V18H12Z"
      fill="black"
    />
  </SvgComponent>
);

export default QITransactionLog;
