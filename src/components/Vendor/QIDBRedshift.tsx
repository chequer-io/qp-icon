import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBRedshift: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path d="M16 23.26L26.08 25.66V6.78L16 9.18002V23.26Z" fill="#205B97" />
    <path
      d="M26.08 6.78L27.9999 7.78V24.78L26.08 25.78V6.78ZM15.9999 23.26L5.91992 25.66V6.78L15.9999 9.18002V23.26Z"
      fill="#5193CE"
    />
    <path d="M5.91998 6.78L4 7.78V24.78L5.91998 25.78V6.78Z" fill="#205B97" />
    <path
      d="M18.5601 29.5L22.4001 27.58V4.92001L18.5601 2.99997L17.3901 15.58L18.5601 29.5Z"
      fill="#5193CE"
    />
    <path
      d="M13.4401 29.5L9.6001 27.58V4.92001L13.4401 2.99997L14.6101 15.58L13.4401 29.5Z"
      fill="#205B97"
    />
    <path d="M13.4399 2.99997H18.6099V29.45H13.4399V2.99997Z" fill="#2E73B7" />
  </SvgComponent>
);
