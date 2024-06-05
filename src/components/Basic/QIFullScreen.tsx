import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFullScreen: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4H6C4.9 4 4 4.89 4 6V14H6V6H14V4ZM14 26H6V18H4V26C4 27.11 4.9 28 6 28H14V26ZM18 28V26H26V18H28V26C28 27.11 27.1 28 26 28H18ZM18 6V4H26C27.1 4 28 4.89 28 6V14H26V6H18Z"
      fill="#818589"
    />
  </SvgComponent>
);
