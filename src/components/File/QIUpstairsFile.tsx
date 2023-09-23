import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIUpstairsFile: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.17 6L15.17 10H28V26H19V28H28C29.11 28 30 27.11 30 26V10C30 8.9 29.11 8 28 8H16L12.59 4.59C12.21 4.21 11.7 4 11.17 4H4C2.9 4 2 4.9 2 6V26C2 27.11 2.9 28 4 28H15C16.1046 28 17 27.1046 17 26L17 17.83L19.59 20.41L21 19L16 14L11 19L12.41 20.41L15 17.83V26H4V6H11.17Z"
      fill="#656C72"
    />
  </SvgComponent>
);
