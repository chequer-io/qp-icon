import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAccessCheck_New: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 28H8V4H16V10C16 11.1 16.9 12 18 12H24V18H26V10C26 9.7 25.9 9.5 25.7 9.3L18.7 2.3C18.5 2.1 18.3 2 18 2H8C6.9 2 6 2.9 6 4V28C6 29.1 6.9 30 8 30H15V28ZM18 4.4L23.6 10H18V4.4ZM22 27.18L19.41 24.59L18 26L22 30L30 22L28.59 20.59L22 27.18ZM9.99915 16V18H21.9965V16H9.99915ZM9.99915 24V22H16.9976V24H9.99915Z"
      fill="#656C72"
    />
  </SvgComponent>
);
