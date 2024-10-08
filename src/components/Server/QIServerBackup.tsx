import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerBackup: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 26V20H12V18H4V12H22V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V26C2 27.1 2.9 28 4 28H12V26H4ZM4 4H20V10H4V4ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8ZM7 16C7.55228 16 8 15.5523 8 15C8 14.4477 7.55228 14 7 14C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16ZM8 23C8 23.5523 7.55228 24 7 24C6.44772 24 6 23.5523 6 23C6 22.4477 6.44772 22 7 22C7.55228 22 8 22.4477 8 23ZM28 19.41V17H30V23H24V21H26.58C25.8 19.24 24.05 18 22 18C19.24 18 17 20.24 17 23C17 25.76 19.24 28 22 28V30C18.14 30 15 26.86 15 23C15 19.14 18.14 16 22 16C24.55 16 26.78 17.37 28 19.41Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
