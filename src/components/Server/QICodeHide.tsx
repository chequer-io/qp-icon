import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICodeHide: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.41 2L30 28.59L28.59 30L16.52 17.93L14.35 26L12.42 25.48L14.88 16.3L9.21 10.62L3.83 16L9.41 21.59L8 23L1 16L7.79 9.21L2 3.41L3.41 2ZM17.71 13.47L19.58 6.52L17.64 6L16.08 11.84L17.71 13.47ZM24.21 19.96L25.62 21.38L31 16L24 9L22.59 10.41L28.17 16L24.21 19.96Z"
      fill="#818589"
    />
  </SvgComponent>
);
