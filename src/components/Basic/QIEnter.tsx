import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIEnter: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M28 21H5.83L9.42 24.59L8 26L2 20L8 14L9.41 15.41L5.83 19H28V8H18V6H28C29.1 6 30 6.9 30 8V19C30 20.1 29.1 21 28 21Z"
      fill="#656C72"
    />
  </SvgComponent>
);
