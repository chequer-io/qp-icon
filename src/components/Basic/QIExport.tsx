import React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIExport: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.41003 13.41L6 12L16 2L26 12L24.59 13.41L17 5.82996V24H15V5.82996L7.41003 13.41ZM26 28V24H28V28C28 29.11 27.1 30 26 30H6C4.90002 30 4.01001 29.1 4.01001 28H4V24H6V28H26Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIExport;
