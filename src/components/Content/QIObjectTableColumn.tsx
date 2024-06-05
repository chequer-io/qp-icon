import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIObjectTableColumn: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM27 5H21V27H27V5ZM13 5H19V27H13V5ZM11 5H5V27H11V5Z"
      fill="#818589"
    />
  </SvgComponent>
);
