import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIObjectField: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 15H28C29.1 15 30 14.1 30 13V7C30 5.9 29.1 5 28 5H4C2.9 5 2 5.9 2 7V13C2 14.1 2.9 15 4 15ZM4 13V7H28V13H4Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 27H28C29.1 27 30 26.1 30 25V19C30 17.9 29.1 17 28 17H4C2.9 17 2 17.9 2 19V25C2 26.1 2.9 27 4 27ZM4 25V19H28V25H4Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
