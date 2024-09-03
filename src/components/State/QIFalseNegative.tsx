import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFalseNegative: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 28C18.2241 28 21.174 26.8264 23.4459 24.883L28.59 30L30 28.59L24.883 23.4459C26.8264 21.174 28 18.2241 28 15C28 7.8203 22.1797 2 15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28ZM13.5858 15L9 10.4143L10.4142 9.00005L15 13.5858L19.5858 9L21 10.4142L16.4142 15L21 19.5858L19.5858 21L15 16.4142L10.4142 21L9 19.5858L13.5858 15Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
