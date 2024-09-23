import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeOthers: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#A6A8B4"
    />
    <path d="M19 2L26 9H19V2Z" fill="#797B89" />
    <path
      d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
      fill="white"
    />
    <path
      d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"
      fill="white"
    />
    <path
      d="M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z"
      fill="white"
    />
  </SvgComponent>
);
