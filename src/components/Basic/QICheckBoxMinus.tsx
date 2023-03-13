import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICheckBoxMinus: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4H26C27.1 4 28 4.89 28 6V26C28 27.11 27.1 28 26 28H6C4.9 28 4 27.11 4 26V6C4 4.89 4.9 4 6 4ZM26 6H6V26H26V6ZM22 15H10V17H22V15Z"
      fill="#656C72"
    />
  </SvgComponent>
);
