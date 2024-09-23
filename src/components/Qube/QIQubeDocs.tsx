import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeDocs: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#4285F4"
    />
    <path d="M19 2L26 9H19V2Z" fill="#0C5BC8" />
    <path d="M11 12H21V14H11V12Z" fill="white" />
    <path d="M11 16H21V18H11V16Z" fill="white" />
    <path d="M11 20H17V22H11V20Z" fill="white" />
  </SvgComponent>
);
