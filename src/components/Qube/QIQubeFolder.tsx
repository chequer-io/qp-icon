import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeFolder: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M4 9H26C27.1046 9 28 9.89543 28 11V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24V9Z"
      fill="#FBBC04"
    />
    <path
      d="M4 7C4 6.44772 4.44772 6 5 6H11.9833C12.3743 6 12.7295 6.22789 12.8924 6.58335L14 9H4V7Z"
      fill="#E79200"
    />
  </SvgComponent>
);
