import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeCode: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#F77F28"
    />
    <path
      d="M23 17.5095L18.5395 19.7852V18.2986L21.5934 16.8782L21.5522 16.9553V16.7717L21.5934 16.8488L18.5395 15.4283V13.9418L23 16.2175V17.5095Z"
      fill="white"
    />
    <path d="M17.6263 12L15.5355 21H14.3729L16.4637 12H17.6263Z" fill="white" />
    <path
      d="M9 17.5095V16.2175L13.4605 13.9418V15.4283L10.4066 16.8488L10.4478 16.7717V16.9553L10.4066 16.8782L13.4605 18.2986V19.7852L9 17.5095Z"
      fill="white"
    />
    <path d="M19 2L26 9H19V2Z" fill="#C95705" />
  </SvgComponent>
);
