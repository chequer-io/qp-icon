import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIExclamationCircleLine: CustomizedSVGComponent = ({
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
      d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM15 18L15 8H17V18L15 18ZM14.5 22.5C14.5 21.6716 15.1716 21 16 21C16.8284 21 17.5 21.6716 17.5 22.5C17.5 23.3284 16.8284 24 16 24C15.1716 24 14.5 23.3284 14.5 22.5Z"
      fill="#656C72"
    />
  </SvgComponent>
);
