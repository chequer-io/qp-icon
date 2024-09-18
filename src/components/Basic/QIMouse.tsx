import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIMouse: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M22 27C21.74 27 21.49 26.9 21.29 26.71L15.15 20.57L11.83 25.56C11.62 25.88 11.24 26.05 10.85 25.99C10.47 25.93 10.15 25.66 10.04 25.29L4.04 5.29C3.93 4.94 4.04 4.56 4.29 4.3C4.55 4.03 4.94 3.94 5.29 4.04L25.29 10.04C25.66 10.15 25.93 10.47 25.99 10.85C26.05 11.23 25.88 11.62 25.56 11.83L20.57 15.15L26.71 21.29C27.1 21.68 27.1 22.31 26.71 22.7L22.71 26.7C22.51 26.9 22.26 26.99 22 26.99V27ZM22 24.59L24.59 22L17.44 14.85L22.69 11.35L6.49 6.49L11.35 22.68L14.85 17.43L22 24.58V24.59Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
