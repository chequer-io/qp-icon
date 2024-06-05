import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServices: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M3 4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V14C15 14.5523 14.5523 15 14 15H4C3.44772 15 3 14.5523 3 14V4Z"
      fill="#B6BAC4"
    />
    <path
      d="M17 18C17 17.4477 17.4477 17 18 17H28C28.5523 17 29 17.4477 29 18V28C29 28.5523 28.5523 29 28 29H18C17.4477 29 17 28.5523 17 28V18Z"
      fill="#B6BAC4"
    />
    <path
      d="M17 4C17 3.44772 17.4477 3 18 3H28C28.5523 3 29 3.44772 29 4V14C29 14.5523 28.5523 15 28 15H18C17.4477 15 17 14.5523 17 14V4Z"
      fill="#85888E"
    />
    <path
      d="M3 18C3 17.4477 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18V28C15 28.5523 14.5523 29 14 29H4C3.44772 29 3 28.5523 3 28V18Z"
      fill="#85888E"
    />
  </SvgComponent>
);
