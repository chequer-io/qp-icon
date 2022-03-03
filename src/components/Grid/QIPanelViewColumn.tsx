import React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIPanelViewColumn: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 6H26V26H17V6ZM15 6H6V26H15V6ZM4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIPanelViewColumn;
