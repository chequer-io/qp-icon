import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIEnter: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M26 20H7.83L11.42 23.59L10 25L4 19L10 13L11.41 14.41L7.83 18H26V7H28V18C28 19.1 27.1 20 26 20Z"
      fill="#818589"
    />
  </SvgComponent>
);
