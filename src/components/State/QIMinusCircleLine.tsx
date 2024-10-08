import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIMinusCircleLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 16C28 9.39999 22.6 4 16 4C9.40002 4 4 9.39999 4 16C4 22.6 9.40002 28 16 28C22.6 28 28 22.6 28 16ZM2 16C2 8.29999 8.29999 2 16 2C23.7 2 30 8.29999 30 16C30 23.7 23.7 30 16 30C8.29999 30 2 23.7 2 16ZM8 15H24V17H8V15Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
