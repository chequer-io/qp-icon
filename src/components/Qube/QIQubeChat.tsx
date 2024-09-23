import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeChat: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M4 6.97113C4 6.44836 4.21071 5.94699 4.58579 5.57733C4.96086 5.20767 5.46957 5 6 5H26C26.5304 5 27.0391 5.20767 27.4142 5.57733C27.7893 5.94699 28 6.44836 28 6.97113V22.7835C28 23.3063 27.7893 23.8076 27.4142 24.1773C27.0391 24.547 26.5304 24.7546 26 24.7546H8.414C8.14881 24.7547 7.89449 24.8586 7.707 25.0434L4.854 27.8552C4.78413 27.9243 4.69505 27.9713 4.59804 27.9904C4.50102 28.0096 4.40043 27.9999 4.309 27.9626C4.21757 27.9254 4.1394 27.8622 4.0844 27.7812C4.02939 27.7001 4.00002 27.6048 4 27.5073V6.97113Z"
      fill="#864EE6"
    />
    <path d="M11 10H21V12H11V10Z" fill="white" />
    <path d="M11 14H21V16H11V14Z" fill="white" />
    <path d="M11 18H17V20H11V18Z" fill="white" />
  </SvgComponent>
);
