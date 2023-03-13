import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAzureCloud: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <rect width="32" height="32" rx="4" fill="#0072C6" />
    <path
      d="M17.1126 6L10.0374 12.1354L4 22.9728H9.44416L17.1126 6ZM18.0534 7.4352L15.0342 15.9456L20.824 23.2195L9.592 25.1491H28L18.0534 7.4352Z"
      fill="white"
    />
  </SvgComponent>
);
