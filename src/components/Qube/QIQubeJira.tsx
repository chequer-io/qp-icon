import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeJira: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#0C5BC8"
    />
    <path d="M19 2L26 9H19V2Z" fill="#4285F4" />
    <path d="M13 12H21V14H13V12Z" fill="white" />
    <path d="M13 16H21V18H13V16Z" fill="white" />
    <path d="M13 20H17.8V22H13V20Z" fill="white" />
    <path
      d="M12 13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13C10 12.4477 10.4477 12 11 12C11.5523 12 12 12.4477 12 13Z"
      fill="white"
    />
    <path
      d="M12 17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16C11.5523 16 12 16.4477 12 17Z"
      fill="white"
    />
    <path
      d="M12 21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21C10 20.4477 10.4477 20 11 20C11.5523 20 12 20.4477 12 21Z"
      fill="white"
    />
  </SvgComponent>
);
