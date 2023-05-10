import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIOkta: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M16 2C8.28688 2 2 8.24181 2 16C2 23.7582 8.24225 30 16 30C23.7578 30 30 23.7578 30 16C30 8.24225 23.7131 2 16 2ZM16 23C12.1211 23 9 19.8789 9 16C9 12.1211 12.1211 9 16 9C19.8789 9 23 12.1211 23 16C23 19.8789 19.8789 23 16 23Z"
      fill="#007DC1"
    />
  </SvgComponent>
);
