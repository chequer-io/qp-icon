import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISequence: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10V8H7V22H10V24H2V22H5V12H3V10H5ZM28 10H22V8H28C29.1046 8 30 8.89543 30 10V22C30 23.1046 29.1046 24 28 24H22V22H28V17H23V15H28V10ZM13 22H15V24H13V22ZM19 22H17V24H19V22Z"
      fill="#818589"
    />
  </SvgComponent>
);
