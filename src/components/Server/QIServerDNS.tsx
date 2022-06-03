import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerDNS: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C11.59 2 8 5.59 8 10C8 14.41 11.59 18 16 18C20.41 18 24 14.41 24 10C24 5.59 20.41 2 16 2ZM21.91 9H19.47C19.39 7.43 19.13 5.88001 18.68 4.64001C20.36 5.48001 21.59 7.09 21.91 9ZM16.02 16C15.64 15.88 14.71 14.18 14.54 11H17.47C17.3 14.18 16.38 15.88 16.03 16H16.02ZM14.53 9C14.7 5.82 15.62 4.12 15.97 4C16.35 4.12 17.28 5.82 17.45 9H14.53ZM13.31 4.64001C12.85 5.88001 12.6 7.43 12.52 9H10.08C10.4 7.09 11.63 5.48001 13.31 4.64001ZM10.08 11H12.52C12.6 12.57 12.86 14.12 13.31 15.36C11.63 14.52 10.4 12.91 10.08 11ZM18.67 15.36C19.13 14.12 19.38 12.57 19.46 11H21.9C21.58 12.91 20.35 14.52 18.67 15.36ZM4 30C2.9 30 2 29.1 2 28V22C2 20.9 2.9 20 4 20H28C29.1 20 30 20.9 30 22V28C30 29.1 29.1 30 28 30H4ZM4 22V28H28V22H4ZM8 25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24C7.55228 24 8 24.4477 8 25Z"
      fill="#656C72"
    />
  </SvgComponent>
);
