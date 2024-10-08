import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerGroup1: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M7 6C7.55228 6 8 5.55228 8 5C8 4.44772 7.55228 4 7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6Z"
      fill="#7E848A"
    />
    <path
      d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
      fill="#7E848A"
    />
    <path
      d="M7 22C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20C6.44772 20 6 20.4477 6 21C6 21.5523 6.44772 22 7 22Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0H4C2.9 0 2 0.9 2 2V24C2 25.1 2.9 26 4 26H20C21.1 26 22 25.1 22 24V2C22 0.9 21.1 0 20 0ZM20 8H4V2H20V8ZM4 16V10H20V16H4ZM4 24V18H20V24H4Z"
      fill="#7E848A"
    />
    <path
      d="M10 30V28H12V30H28V24H24V22H28V16H24V14H28V8H24V6H28C29.1 6 30 6.9 30 8V30C30 31.1 29.1 32 28 32H12C10.9 32 10 31.1 10 30Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
