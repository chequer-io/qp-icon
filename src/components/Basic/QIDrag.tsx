import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDrag: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6H10V10H14V6ZM14 14H10V18H14V14ZM10 22H14V26H10V22ZM22 6H18V10H22V6ZM18 14H22V18H18V14ZM22 22H18V26H22V22Z"
      fill="#656C72"
    />
  </SvgComponent>
);
