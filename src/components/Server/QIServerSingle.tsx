import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerSingle: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 21H28C29.1 21 30 20.1 30 19V13C30 11.9 29.1 11 28 11H4C2.9 11 2 11.9 2 13V19C2 20.1 2.9 21 4 21ZM4 19V13H28V19H4ZM6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16C8 16.5523 7.55228 17 7 17C6.44772 17 6 16.5523 6 16Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
