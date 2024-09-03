import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIInstanceClassic: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.5 21H23V19H23.5C25.98 19 28 16.98 28 14.5C28 12.17 26.18 10.2 23.86 10.02L23.04 9.96L22.9399 9.15C22.5099 5.65 19.53 3.01 16 3.01C12.47 3.01 9.49006 5.65 9.06006 9.15L8.95996 9.96L8.14001 10.02C5.82001 10.2 4 12.17 4 14.5C4 16.98 6.02 19 8.5 19H9V21H8.5C4.92 21 2 18.08 2 14.5C2 11.4 4.22995 8.74 7.19995 8.14C8.06995 4.02 11.72 1 16 1C20.28 1 23.93 4.02 24.8 8.14C27.77 8.75 30 11.4 30 14.5C30 18.08 27.08 21 23.5 21ZM9 28C9.55228 28 10 27.5523 10 27C10 26.4477 9.55228 26 9 26C8.44772 26 8 26.4477 8 27C8 27.5523 8.44772 28 9 28ZM17 23H26C27.1 23 28 23.9 28 25V29C28 30.1 27.1 31 26 31H6C4.9 31 4 30.1 4 29V25C4 23.9 4.9 23 6 23H15V15.83L12.41 18.41L11 17L16 12L21 17L19.59 18.41L17 15.83V23ZM6 29H26V25H6V29Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
