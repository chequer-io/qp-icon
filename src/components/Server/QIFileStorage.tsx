import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFileStorage: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.71 2.29001L22.71 7.29001C22.89 7.48001 23 7.73 23 8V20C23 21.1 22.1 22 21 22H11C9.9 22 9 21.1 9 20V4C9 2.9 9.9 2 11 2H17C17.27 2 17.52 2.10001 17.71 2.29001ZM17 8H20.59L17 4.41V8ZM11 4V20H21V10H17C15.9 10 15 9.1 15 8V4H11ZM28 20H26V22H28V28H4V22H6V20H4C2.9 20 2 20.9 2 22V28C2 29.1 2.9 30 4 30H28C29.1 30 30 29.1 30 28V22C30 20.9 29.1 20 28 20ZM7 26C7.55228 26 8 25.5523 8 25C8 24.4477 7.55228 24 7 24C6.44772 24 6 24.4477 6 25C6 25.5523 6.44772 26 7 26Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
