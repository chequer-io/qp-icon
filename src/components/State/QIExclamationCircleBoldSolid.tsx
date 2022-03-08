import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIExclamationCircleBoldSolid: CustomizedSVGComponent = ({
  ...props
}) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM14.5 19V7H17.5V19H14.5ZM18 23C18 24.1046 17.1046 25 16 25C14.8954 25 14 24.1046 14 23C14 21.8954 14.8954 21 16 21C17.1046 21 18 21.8954 18 23Z"
      fill="black"
    />
  </SvgComponent>
);
