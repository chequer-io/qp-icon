import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIExitFullScreen: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M28 18H20C18.9 18 18 18.89 18 20V28H20V20H28V18Z" fill="#7E848A" />
    <path d="M20 12H28V14H20C18.9 14 18 13.11 18 12V4H20V12Z" fill="#7E848A" />
    <path d="M4 20V18H12C13.1 18 14 18.89 14 20V28H12V20H4Z" fill="#7E848A" />
    <path d="M4 14V12H12V4H14V12C14 13.11 13.1 14 12 14H4Z" fill="#7E848A" />
  </SvgComponent>
);
