import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIEnlarge: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4V2H30V12H28V5.41003L19.41 14L18 12.58L26.59 4H20ZM12.59 18L14 19.42L5.41 28H12V30H2V20H4V26.59L12.59 18Z"
      fill="#656C72"
    />
  </SvgComponent>
);
