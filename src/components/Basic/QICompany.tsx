import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICompany: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M8 7.5H12V9.5H8V7.5Z" fill="#7E848A" />
    <path d="M8 12.5H12V14.5H8V12.5Z" fill="#7E848A" />
    <path d="M14 12.5V14.5H18V12.5H14Z" fill="#7E848A" />
    <path d="M8 17.5H12V19.5H8V17.5Z" fill="#7E848A" />
    <path d="M14 17.5V19.5H18V17.5H14Z" fill="#7E848A" />
    <path d="M8 22.5H12V24.5H8V22.5Z" fill="#7E848A" />
    <path d="M14 22.5V24.5H18V22.5H14Z" fill="#7E848A" />
    <path d="M14 7.5V9.5H18V7.5H14Z" fill="#7E848A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 30H28V14C28 12.8954 27.1046 12 26 12H22V4C22 2.89543 21.1046 2 20 2H6C4.89543 2 4 2.89543 4 4V30ZM20 4H6V28H20V4ZM26 28H22V14H26V28Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
