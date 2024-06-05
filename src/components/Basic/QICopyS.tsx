import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICopyS: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6C6.89543 6 6 6.89543 6 8V17H8V8H17V6H8ZM12 12H24V24H12V12ZM10 12C10 10.8954 10.8954 10 12 10H24C25.1046 10 26 10.8954 26 12V24C26 25.1046 25.1046 26 24 26H12C10.8954 26 10 25.1046 10 24V12Z"
      fill="#818589"
    />
  </SvgComponent>
);
