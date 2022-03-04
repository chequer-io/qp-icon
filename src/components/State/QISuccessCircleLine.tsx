import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QISuccessCircleLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 16C2 8.27 8.27002 2 16 2C23.73 2 30 8.27 30 16C30 23.73 23.73 30 16 30C8.27002 30 2 23.73 2 16ZM4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4C9.37 4 4 9.37 4 16ZM9 16.41L14 21.41L23 12.42L21.58 11L14 18.59L10.41 15L9 16.41Z"
      fill="black"
    />
  </SvgComponent>
);
