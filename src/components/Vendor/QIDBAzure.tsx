import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBAzure: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M17.2981 5L9.04368 12.1579L2 24.8016H8.35152L17.2981 5ZM18.3957 6.6744L14.8733 16.6032L21.628 25.0894L8.524 27.3406H30L18.3957 6.6744Z"
      fill="#0072C6"
    />
  </SvgComponent>
);
