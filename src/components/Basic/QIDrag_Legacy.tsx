import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDrag_Legacy: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M2 15H30V17H2V15Z" fill="#7E848A" />
    <path d="M2 8H30V10H2V8Z" fill="#7E848A" />
    <path d="M2 22H30V24H2V22Z" fill="#7E848A" />
  </SvgComponent>
);
