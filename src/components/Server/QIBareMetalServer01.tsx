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
      d="M26 20H6C4.9 20 4 19.1 4 18V14C4 12.9 4.9 12 6 12H26C27.1 12 28 12.9 28 14V18C28 19.1 27.1 20 26 20ZM6 14V18H26V14H6ZM9 17C9.55228 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17ZM17 22V28H27V30H5V28H15V22H17Z"
      fill="#656C72"
    />
  </SvgComponent>
);
