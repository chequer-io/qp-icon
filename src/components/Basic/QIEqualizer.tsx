import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIEqualizer: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M26 14V28H24V14H26Z" fill="#7E848A" />
    <path d="M8 14L8 28H6L6 14H8Z" fill="#7E848A" />
    <path d="M17 18V4L15 4L15 18H17Z" fill="#7E848A" />
    <path d="M26 4V8H24V4L26 4Z" fill="#7E848A" />
    <path d="M8 4V8H6V4L8 4Z" fill="#7E848A" />
    <path d="M17 28V24H15V28H17Z" fill="#7E848A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 11C23 12.1046 23.8954 13 25 13C26.1046 13 27 12.1046 27 11C27 9.89543 26.1046 9 25 9C23.8954 9 23 9.89543 23 11ZM21 11C21 13.2091 22.7909 15 25 15C27.2091 15 29 13.2091 29 11C29 8.79086 27.2091 7 25 7C22.7909 7 21 8.79086 21 11Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11C5 12.1046 5.89543 13 7 13C8.10457 13 9 12.1046 9 11C9 9.89543 8.10457 9 7 9C5.89543 9 5 9.89543 5 11ZM3 11C3 13.2091 4.79086 15 7 15C9.20914 15 11 13.2091 11 11C11 8.79086 9.20914 7 7 7C4.79086 7 3 8.79086 3 11Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 21C14 19.8954 14.8954 19 16 19C17.1046 19 18 19.8954 18 21C18 22.1046 17.1046 23 16 23C14.8954 23 14 22.1046 14 21ZM12 21C12 18.7909 13.7909 17 16 17C18.2091 17 20 18.7909 20 21C20 23.2091 18.2091 25 16 25C13.7909 25 12 23.2091 12 21Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
