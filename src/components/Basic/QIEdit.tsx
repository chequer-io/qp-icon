import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIEdit: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8 3.59995L25.4 7.19992C26.2 7.99997 26.2 9.19992 25.4 9.99997L10.4 25H4V18.5999L19 3.59995C19.8 2.80002 21 2.80002 21.8 3.59995ZM24 8.59995L20.4 4.99997L17.4 7.99997L21 11.5999L24 8.59995ZM6 19.4V23H9.59998L19.6 13L16 9.39999L6 19.4ZM2 29V27H30V29H2Z"
      fill="#818589"
    />
  </SvgComponent>
);
