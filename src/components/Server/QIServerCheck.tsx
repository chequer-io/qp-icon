import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerCheck: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3H24C25.1 3 26 3.9 26 5V21H8V27H16V29H8C6.9 29 6 28.1 6 27V5C6 3.9 6.9 3 8 3ZM8 19H24V13H8V19ZM8 11H24V5H8V11ZM11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9ZM23 28.18L20.41 25.59L19 27L23 31L30 24L28.59 22.59L23 28.18ZM12 16C12 16.5523 11.5523 17 11 17C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15C11.5523 15 12 15.4477 12 16ZM11 25C11.5523 25 12 24.5523 12 24C12 23.4477 11.5523 23 11 23C10.4477 23 10 23.4477 10 24C10 24.5523 10.4477 25 11 25Z"
      fill="#656C72"
    />
  </SvgComponent>
);
