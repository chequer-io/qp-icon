import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeWord: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#F77F28"
    />
    <path
      d="M13.0566 20L11 13H12.8875L13.9538 17.5869H14.0124L15.2305 13H16.7695L17.9876 17.5972H18.0462L19.1159 13H21L18.9469 20H17.3009L16.0276 15.7549H15.9724L14.6991 20H13.0566Z"
      fill="white"
    />
    <path d="M19 2L26 9H19V2Z" fill="#C95705" />
  </SvgComponent>
);
