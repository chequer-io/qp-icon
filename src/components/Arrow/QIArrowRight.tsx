import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIArrowRight: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M18 6L16.57 7.39L24.15 15H4V17H24.15L16.57 24.57L18 26L28 16L18 6Z"
      fill="#818589"
    />
  </SvgComponent>
);
