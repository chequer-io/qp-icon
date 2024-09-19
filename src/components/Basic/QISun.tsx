import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISun: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M5.24262 5.24264L15.8492 8.24264L26.4558 5.24264L23.4558 15.8492L26.4558 26.4558L15.8492 23.4558L5.24262 26.4558L8.24262 15.8492L5.24262 5.24264Z"
      fill="#7E848A"
    />
    <path
      d="M16 1L20.5 11.5L31 16L20.5 20.5L16 31L11.5 20.5L1 16L11.5 11.5L16 1Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
