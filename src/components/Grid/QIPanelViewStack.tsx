import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPanelViewStack: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 15L6 6L26 6L26 15L6 15ZM6 17L6 26L26 26L26 17L6 17ZM6 28C4.89543 28 4 27.1046 4 26L4 6C4 4.89543 4.89543 4 6 4L26 4C27.1046 4 28 4.89543 28 6L28 26C28 27.1046 27.1046 28 26 28L6 28Z"
      fill="black"
    />
  </SvgComponent>
);
