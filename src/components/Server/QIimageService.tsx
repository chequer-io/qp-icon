import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIimageService: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4H13V12H15V4ZM26 20H28C29.1 20 30 20.9 30 22V28C30 29.1 29.1 30 28 30H4C2.9 30 2 29.1 2 28V22C2 20.9 2.9 20 4 20H6V22H4V28H28V22H26V20ZM8 25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24C7.55228 24 8 24.4477 8 25ZM9 4H11V12H9V4ZM21 12H19C17.9 12 17 11.1 17 10V6C17 4.9 17.9 4 19 4H21C22.1 4 23 4.9 23 6V10C23 11.1 22.1 12 21 12ZM19 6V10H21V6H19ZM21 14H23V22H21V14ZM11 14H9V22H11V14ZM15 22H17C18.1 22 19 21.1 19 20V16C19 14.9 18.1 14 17 14H15C13.9 14 13 14.9 13 16V20C13 21.1 13.9 22 15 22ZM15 20V16H17V20H15Z"
      fill="#656C72"
    />
  </SvgComponent>
);
