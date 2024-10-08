import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIExport: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4L23 11L21.59 12.41L17 7.82821V22H15V7.82821L10.41 12.41L9 11L16 4ZM26 22V26H6V22H4V26H4.01001C4.01001 27.1 4.90002 28 6 28H26C27.1 28 28 27.11 28 26V22H26Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
