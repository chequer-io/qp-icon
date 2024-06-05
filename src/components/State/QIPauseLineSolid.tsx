import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPauseLineSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M13 9C11.89 9 11 9.89999 11 11V21C11 22.11 11.89 23 13 23C14.1046 23 15 22.1046 15 21V11C15 9.89543 14.1046 9 13 9Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.27002 2 2 8.27 2 16C2 23.73 8.27002 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C9.38 28 4 22.62 4 16C4 9.38 9.38 4 16 4Z"
      fill="#818589"
    />
    <path
      d="M19 9C17.89 9 17 9.89999 17 11V21C17 22.11 17.89 23 19 23C20.1046 23 21 22.1046 21 21V11C21 9.89543 20.1046 9 19 9Z"
      fill="#818589"
    />
  </SvgComponent>
);
