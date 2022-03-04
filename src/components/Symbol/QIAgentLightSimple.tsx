import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAgentLightSimple: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="#58B8E8"
    />
    <path
      d="M8.71883 8.76044C5.32995 12.2012 5.08412 17.6921 8.12183 21.4359L11.7917 17.7278C10.5625 15.7489 11.1244 13.1282 13.0735 11.8803C14.4431 11.0067 16.1814 11.0067 17.551 11.8803L21.2208 8.15429C17.5159 5.07011 12.1077 5.31969 8.71883 8.76044Z"
      fill="white"
    />
    <path
      d="M22.3624 9.33118L18.7277 13.0393C20.0271 14.9647 19.553 17.6032 17.6566 18.9225C16.2344 19.9208 14.3556 19.9208 12.9333 18.9225L9.28101 22.6128C13.1791 25.9822 19.0438 25.5009 22.3624 21.5431C25.3124 18.0311 25.3124 12.8611 22.3624 9.33118Z"
      fill="white"
    />
    <path d="M25.7512 26V20.2952L20.1147 26H25.7512Z" fill="white" />
  </SvgComponent>
);
