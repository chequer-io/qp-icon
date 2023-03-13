import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIChevronUpSmall: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16 11.59L23 18.59L21.59 20L16 14.42L10.41 20L9 18.59L16 11.59Z"
      fill="#656C72"
    />
  </SvgComponent>
);
