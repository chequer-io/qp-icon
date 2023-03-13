import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDotS: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16Z"
      fill="#656C72"
    />
  </SvgComponent>
);
