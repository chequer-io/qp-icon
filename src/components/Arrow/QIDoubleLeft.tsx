import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDoubleLeft: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.41 7.41L17 6L7 16L17 26L18.41 24.59L9.82999 16L18.41 7.41ZM24.41 7.41L23 6L13 16L23 26L24.41 24.59L15.83 16L24.41 7.41Z"
      fill="#818589"
    />
  </SvgComponent>
);
