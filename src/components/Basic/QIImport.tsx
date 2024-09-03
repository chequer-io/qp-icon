import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIImport: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 22L9 15L10.41 13.59L15 18.1718L15 4H17L17 18.1718L21.59 13.59L23 15L16 22ZM26 22V26H6V22H4V26C4 27.11 4.89 28 6 28H26C27.1 28 28 27.11 28 26V22H26Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
