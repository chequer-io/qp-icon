import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDownload: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 24L9 17L10.41 15.59L15 20.1718L15 4H17L17 20.1718L21.59 15.59L23 17L16 24ZM28 26H4V28C5.11 28 28 28 28 28V26Z"
      fill="#656C72"
    />
  </SvgComponent>
);
