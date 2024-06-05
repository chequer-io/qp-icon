import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QITime: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 16C2 23.72 8.28003 30 16 30C23.72 30 30 23.72 30 16C30 8.28003 23.72 2 16 2C8.28003 2 2 8.28003 2 16ZM4 16C4 9.38 9.38 4 16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C9.38 28 4 22.62 4 16ZM15 16.41L20.59 22L22 20.59L17 15.58V8H15V16.41Z"
      fill="#818589"
    />
  </SvgComponent>
);
