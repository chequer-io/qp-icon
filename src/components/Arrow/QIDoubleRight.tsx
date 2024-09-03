import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDoubleRight: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.59 7.41L15 6L25 16L15 26L13.59 24.59L22.17 16L13.59 7.41ZM7.59 7.41L9 6L19 16L9 26L7.59 24.59L16.17 16L7.59 7.41Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
