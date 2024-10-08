import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPinSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M28.59 13.31L30 11.9L20 2L18.69 3.42L19.87 4.6L8.38 14.32L6.66 12.61L5.25 14L10.91 19.68L2 28.58L3.41 30L12.32 21.09L18 26.75L19.39 25.34L17.68 23.62L27.4 12.13L28.59 13.31Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
