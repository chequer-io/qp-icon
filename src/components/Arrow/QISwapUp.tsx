import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISwapUp: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 11L16 4L9 11L10.41 12.41L15 7.82821V28H17V7.82821L21.59 12.41L23 11Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
