import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISpeed: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 16C2 23.72 8.28 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2C8.28 2 2 8.28 2 16ZM4 16C4 9.38 9.38 4 16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C9.38 28 4 22.62 4 16ZM22 8.59L23.41 10L18.7 14.71C18.89 15.11 19 15.54 19 16C19 17.65 17.65 19 16 19C14.35 19 13 17.65 13 16C13 14.35 14.35 13 16 13C16.47 13 16.9 13.11 17.29 13.3L22 8.59ZM15 16C15 16.55 15.45 17 16 17C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15C15.45 15 15 15.45 15 16ZM26 16C26 14.33 25.58 12.76 24.86 11.38L23.36 12.88C23.77 13.84 24 14.89 24 16H26ZM19.12 8.64C18.16 8.23 17.11 8 16 8C11.59 8 8 11.59 8 16H6C6 10.49 10.49 6 16 6C17.67 6 19.24 6.42 20.62 7.14L19.12 8.64Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
