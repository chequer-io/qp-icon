import React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QICollapse: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 5.41003L16 12.41L23 5.41003L21.59 4L16 9.57996L10.41 4L9 5.41003ZM23 26.59L16 19.59L9 26.59L10.41 28L16 22.42L21.59 28L23 26.59Z"
      fill="black"
    />
  </SvgComponent>
);

export default QICollapse;
