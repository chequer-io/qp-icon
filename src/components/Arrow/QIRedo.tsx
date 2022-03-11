import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIRedo: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M26.19 8L22.6 4.41L24 3L30 9L24 15L22.6 13.59L26.18 10H11.2174C7.20589 10 4 13.1591 4 17C4 20.8409 7.20589 24 11.2174 24H20V26H11.2174C6.15221 26 2 21.9957 2 17C2 12.0043 6.15221 8 11.2174 8H26.19Z"
      fill="black"
    />
  </SvgComponent>
);
