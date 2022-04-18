import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIChevronDownSmall: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16 20.41L9 13.41L10.41 12L16 17.58L21.59 12L23 13.41L16 20.41Z"
      fill="black"
    />
  </SvgComponent>
);
