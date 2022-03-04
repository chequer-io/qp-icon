import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIMembers: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 9C17 6.23999 14.76 4 12 4C9.23999 4 7 6.23999 7 9C7 11.76 9.23999 14 12 14C14.76 14 17 11.76 17 9ZM5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C8.13 16 5 12.87 5 9ZM20 30H22V23C21.99 19.14 16.86 18.01 13 18H11C7.14001 18.01 2 19.14 2 23V30H4V23C4 20.24 8.23999 20 11 20H13C15.76 20 20 20.24 20 23V30ZM20 2V4C22.76 4 25 6.23999 25 9C25 11.76 22.76 14 20 14V16C23.87 16 27 12.87 27 9C27 5.13 23.87 2 20 2ZM28 23C28 20.8544 25.4375 20.2317 23 20.0608V18.1051C26.4234 18.4608 29.9917 19.7814 30 23V30H28V23Z"
      fill="black"
    />
  </SvgComponent>
);
