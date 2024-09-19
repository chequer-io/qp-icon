import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIMoon: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M15.3055 2.30051C8.41908 2.84328 3 8.60347 3 15.6294C3 23.0138 8.98624 29 16.3707 29C20.5873 29 24.348 27.0481 26.7986 23.9986C19.1595 23.8909 13 17.6648 13 10C13 7.15567 13.8482 4.50946 15.3055 2.30051Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
