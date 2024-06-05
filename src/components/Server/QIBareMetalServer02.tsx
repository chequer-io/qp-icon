import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIBareMetalServer02: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10H26C27.1 10 28 9.1 28 8V4C28 2.9 27.1 2 26 2H6C4.9 2 4 2.9 4 4V8C4 9.1 4.9 10 6 10ZM6 8V4H26V8H6ZM9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7ZM9 17C9.55228 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17ZM26 20H6C4.9 20 4 19.1 4 18V14C4 12.9 4.9 12 6 12H26C27.1 12 28 12.9 28 14V18C28 19.1 27.1 20 26 20ZM6 14V18H26V14H6ZM17 22V28H27V30H5V28H15V22H17Z"
      fill="#818589"
    />
  </SvgComponent>
);
