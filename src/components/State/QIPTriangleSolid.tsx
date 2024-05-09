import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPTriangleSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0025 2.57832C16.5894 1.80723 15.4106 1.80723 14.9975 2.57832L1.11977 28.4859C0.747161 29.1816 1.28906 30 2.12225 30H29.8778C30.7109 30 31.2528 29.1816 30.8802 28.4859L17.0025 2.57832ZM15 12V22H17V12H15ZM16 24C15.1716 24 14.5 24.6716 14.5 25.5C14.5 26.3284 15.1716 27 16 27C16.8284 27 17.5 26.3284 17.5 25.5C17.5 24.6716 16.8284 24 16 24Z"
      fill="#656C72"
    />
  </SvgComponent>
);
