import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIUndo: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M5.81 8L9.40002 4.41L8 3L2 9L8 15L9.40002 13.59L5.82001 10H20.7826C24.7941 10 28 13.1591 28 17C28 20.8409 24.7941 24 20.7826 24H12V26H20.7826C25.8478 26 30 21.9957 30 17C30 12.0043 25.8478 8 20.7826 8H5.81Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
