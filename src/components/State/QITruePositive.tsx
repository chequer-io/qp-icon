import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QITruePositive: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 28C18.2241 28 21.174 26.8264 23.4459 24.883L28.59 30L30 28.59L24.883 23.4459C26.8264 21.174 28 18.2241 28 15C28 7.8203 22.1797 2 15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28ZM8 14.41L14 20.41L23 11.41L21.59 10L14 17.58L9.41 13L8 14.41Z"
      fill="#818589"
    />
  </SvgComponent>
);
