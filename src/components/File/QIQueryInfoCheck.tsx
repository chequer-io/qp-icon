import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQueryInfoCheck: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 2H2V4H18V2ZM18 7H2V9H18V7ZM2 12H10V14H2V12ZM10 21.41L18 29.41L32 15.41L30.59 14L18 26.58L11.41 20L10 21.41Z"
      fill="#818589"
    />
  </SvgComponent>
);
