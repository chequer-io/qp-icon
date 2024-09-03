import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDataBlockStorage: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11H8V4H15V11ZM10 9H13V6H10V9ZM15 20H8V13H15V20ZM10 18H13V15H10V18ZM26 20H28C29.1 20 30 20.9 30 22V28C30 29.1 29.1 30 28 30H4C2.9 30 2 29.1 2 28V22C2 20.9 2.9 20 4 20H6V22H4V28H28V22H26V20ZM8 25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24C7.55228 24 8 24.4477 8 25ZM17 20H24V13H17V20ZM22 18H19V15H22V18ZM17 11H24V4H17V11ZM22 9H19V6H22V9Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
