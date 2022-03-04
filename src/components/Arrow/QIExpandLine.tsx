import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIExpandLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 11L16 4L9 11L10.41 12.41L16 6.82996L21.59 12.41L23 11ZM9 21L16 28L23 21L21.59 19.59L16 25.1699L10.41 19.59L9 21Z"
      fill="black"
    />
  </SvgComponent>
);
