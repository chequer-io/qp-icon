import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIChevronDown: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16 23.41L6 13.41L7.41 12L16 20.58L24.59 12L26 13.41L16 23.41Z"
      fill="#656C72"
    />
  </SvgComponent>
);
