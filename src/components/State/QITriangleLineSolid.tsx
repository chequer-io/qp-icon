import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QITriangleLineSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M15 12V22H17V12H15Z" fill="#656C72" />
    <path
      d="M16 24C15.1716 24 14.5 24.6716 14.5 25.5C14.5 26.3284 15.1716 27 16 27C16.8284 27 17.5 26.3284 17.5 25.5C17.5 24.6716 16.8284 24 16 24Z"
      fill="#656C72"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9975 2.57832C15.4106 1.80723 16.5894 1.80723 17.0025 2.57832L30.8802 28.4859C31.2528 29.1816 30.7109 30 29.8778 30H2.12225C1.28906 30 0.747161 29.1816 1.11977 28.4859L14.9975 2.57832ZM3.64894 28L16 4.94246L28.3511 28H3.64894Z"
      fill="#656C72"
    />
  </SvgComponent>
);
