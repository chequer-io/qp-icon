import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIExclamationCircleSolid: CustomizedSVGComponent = ({
  ...props
}) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM15 18V8H17V18H15ZM16 21C15.1716 21 14.5 21.6716 14.5 22.5C14.5 23.3284 15.1716 24 16 24C16.8284 24 17.5 23.3284 17.5 22.5C17.5 21.6716 16.8284 21 16 21Z"
      fill="black"
    />
  </SvgComponent>
);
