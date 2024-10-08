import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIMembers: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 10C17 7.23999 14.76 5 12 5C9.23999 5 7 7.23999 7 10C7 12.76 9.23999 15 12 15C14.76 15 17 12.76 17 10ZM5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10C19 13.87 15.87 17 12 17C8.13 17 5 13.87 5 10ZM20 29H22V23C21.99 19.14 16.86 18.01 13 18H11C7.14001 18.01 2 19.14 2 23V29H4V23C4 20.24 8.23999 20 11 20H13C15.76 20 20 20.24 20 23V29ZM20 3V5C22.76 5 25 7.23999 25 10C25 12.76 22.76 15 20 15V17C23.87 17 27 13.87 27 10C27 6.13 23.87 3 20 3ZM28 23C28 20.8544 25.4375 20.2317 23 20.0608V18.1051C26.4234 18.4608 29.9917 19.7814 30 23V29H28V23Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
