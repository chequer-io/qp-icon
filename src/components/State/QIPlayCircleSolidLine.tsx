import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPlayCircleSolidLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM13.5369 9.978C12.8712 9.55436 12 10.0326 12 10.8217V21.1783C12 21.9674 12.8712 22.4456 13.5369 22.022L21.6742 16.8436C22.2917 16.4507 22.2917 15.5493 21.6742 15.1563L13.5369 9.978ZM14 12.6433V19.3566L19.2747 16L14 12.6433Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
