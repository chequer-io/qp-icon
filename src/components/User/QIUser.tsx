import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIUser: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 10C21 7.23999 18.76 5 16 5C13.24 5 11 7.23999 11 10C11 12.76 13.24 15 16 15C18.76 15 21 12.76 21 10ZM9 10C9 6.13 12.13 3 16 3C19.87 3 23 6.13 23 10C23 13.87 19.87 17 16 17C12.13 17 9 13.87 9 10ZM24 29H26V23C25.99 19.14 20.86 18.01 17 18H15C11.14 18.01 6 19.14 6 23V29H8V23C8 20.24 12.24 20 15 20H17C19.76 20 24 20.24 24 23V29Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
