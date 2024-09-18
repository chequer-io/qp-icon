import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISAC: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M2 10C2 5.58172 5.58172 2 10 2H22C26.4183 2 30 5.58172 30 10V22C30 26.4183 26.4183 30 22 30H10C5.58172 30 2 26.4183 2 22V10Z"
      fill="#4DB70D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.3137 9.37258C17.4836 7.54247 14.5164 7.54247 12.6863 9.37258L9.37258 12.6863C7.54247 14.5164 7.54247 17.4836 9.37258 19.3137L12.6863 22.6274C14.5164 24.4575 17.4836 24.4575 19.3137 22.6274L20.037 21.9041L18.387 20.254L17.9882 20.6528C16.8902 21.7509 15.1099 21.7509 14.0118 20.6528L11.3608 18.0018C10.2628 16.9038 10.2628 15.1234 11.3608 14.0254L14.0118 11.3744C15.1099 10.2763 16.8902 10.2763 17.9882 11.3744L20.6392 14.0254C21.7373 15.1234 21.7373 16.9038 20.6392 18.0018L20.4415 18.1995L22.0915 19.8496L22.6274 19.3137C24.4575 17.4836 24.4575 14.5164 22.6274 12.6863L19.3137 9.37258ZM16.9744 13.6607C16.4254 13.1117 15.5352 13.1117 14.9862 13.6607L13.6607 14.9862C13.1117 15.5352 13.1117 16.4254 13.6607 16.9744L14.9862 18.2999C15.5352 18.8489 16.4254 18.8489 16.9744 18.2999L18.2999 16.9744C18.8489 16.4254 18.8489 15.5352 18.2999 14.9862L16.9744 13.6607Z"
      fill="white"
    />
  </SvgComponent>
);