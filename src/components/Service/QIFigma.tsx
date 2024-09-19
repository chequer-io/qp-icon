import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFigma: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 16.5C16 14.0147 18.0147 12 20.5 12C22.9853 12 25 14.0147 25 16.5C25 18.9853 22.9853 21 20.5 21C18.0147 21 16 18.9853 16 16.5Z"
      fill="#1ABCFE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 25.5C7 23.0147 9.01472 21 11.5 21H16V25.5C16 27.9853 13.9853 30 11.5 30C9.01472 30 7 27.9853 7 25.5Z"
      fill="#0ACF83"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3V12H20.5C22.9853 12 25 9.98528 25 7.5C25 5.01472 22.9853 3 20.5 3H16Z"
      fill="#FF7262"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7.5C7 9.98528 9.01472 12 11.5 12H16V3H11.5C9.01472 3 7 5.01472 7 7.5Z"
      fill="#F24E1E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 16.5C7 18.9853 9.01472 21 11.5 21H16V12H11.5C9.01472 12 7 14.0147 7 16.5Z"
      fill="#A259FF"
    />
  </SvgComponent>
);
