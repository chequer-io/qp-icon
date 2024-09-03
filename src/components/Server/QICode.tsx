import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICode: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4285 25.4915L17.6488 6.00887L19.5807 6.5265L14.3603 26.0092L12.4285 25.4915ZM1 16L8 9L9.41003 10.41L3.82996 16L9.41003 21.59L8 23L1 16ZM31 16L24 23L22.59 21.59L28.17 16L22.59 10.41L24 9L31 16Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
