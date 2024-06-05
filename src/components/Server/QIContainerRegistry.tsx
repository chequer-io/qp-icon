import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIContainerRegistry: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 11H28V2H19V11ZM26 9H21V4H26V9ZM17 6V13H24V22H8V6H17ZM15 8H10V13H15V8ZM15 15H10V20H15V15ZM17 20H22V15H17V20ZM28 20H26V22H28V28H4V22H6V20H4C2.9 20 2 20.9 2 22V28C2 29.1 2.9 30 4 30H28C29.1 30 30 29.1 30 28V22C30 20.9 29.1 20 28 20ZM8 25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24C7.55228 24 8 24.4477 8 25Z"
      fill="#818589"
    />
  </SvgComponent>
);
