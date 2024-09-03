import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIRestore: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M26 8H5.83L9.42 4.41L8 3L2 9L8 15L9.41 13.59L5.83 10H26V26H6V19H4V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V10C28 8.9 27.1 8 26 8Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
