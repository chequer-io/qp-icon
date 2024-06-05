import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIBareMetalServer01: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 15H6C4.9 15 4 14.1 4 13V9C4 7.9 4.9 7 6 7H26C27.1 7 28 7.9 28 9V13C28 14.1 27.1 15 26 15ZM6 9V13H26V9H6ZM9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12ZM17 17V23H27V25H5V23H15V17H17Z"
      fill="#818589"
    />
  </SvgComponent>
);
