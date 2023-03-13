import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QILock: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M24 14H22V8C22 4.69 19.31 2 16 2C12.69 2 10 4.69 10 8V14H8C6.89 14 6 14.89 6 16V28C6 29.11 6.89 30 8 30H24C25.11 30 26 29.11 26 28V16C26 14.89 25.11 14 24 14ZM12 8C12 5.79 13.79 4 16 4C18.21 4 20 5.79 20 8V14H12V8ZM24 28H8V16H24V28Z"
      fill="#656C72"
    />
  </SvgComponent>
);
