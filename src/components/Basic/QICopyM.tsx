import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICopyM: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4C4.89543 4 4 4.89543 4 6V19H6V6H19V4H6ZM10 10H26V26H10V10ZM8 10C8 8.89543 8.89543 8 10 8H26C27.1046 8 28 8.89543 28 10V26C28 27.1046 27.1046 28 26 28H10C8.89543 28 8 27.1046 8 26V10Z"
      fill="#656C72"
    />
  </SvgComponent>
);
