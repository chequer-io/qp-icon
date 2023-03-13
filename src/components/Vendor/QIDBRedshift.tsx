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
    <path d="M16 23.26L26.08 25.66V6.78003L16 9.18005V23.26Z" fill="#205B97" />
    <path
      d="M26.08 6.78003L27.9999 7.78003V24.78L26.08 25.78V6.78003ZM15.9999 23.26L5.91992 25.66V6.78003L15.9999 9.18005V23.26Z"
      fill="#5193CE"
    />
    <path
      d="M5.91998 6.78003L4 7.78003V24.78L5.91998 25.78V6.78003Z"
      fill="#205B97"
    />
    <path
      d="M18.56 29.5L22.4 27.58V4.92004L18.56 3L17.39 15.58L18.56 29.5Z"
      fill="#5193CE"
    />
    <path
      d="M13.44 29.5L9.59998 27.58V4.92004L13.44 3L14.61 15.58L13.44 29.5Z"
      fill="#205B97"
    />
    <path d="M13.4399 3H18.6099V29.45H13.4399V3Z" fill="#2E73B7" />
  </SvgComponent>
);
