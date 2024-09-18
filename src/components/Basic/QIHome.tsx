import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIHome: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2145 3.41095L28.2185 11.1221L28.2414 11.1402C28.7206 11.5196 29 12.0972 29 12.7083V27.7246C29 28.8291 28.1046 29.7246 27 29.7246H5C3.89543 29.7246 3 28.8291 3 27.7246V12.7083C3 12.0972 3.27943 11.5196 3.7586 11.1402L3.7815 11.1221L14.7855 3.41095C15.5022 2.86302 16.4978 2.86302 17.2145 3.41095ZM27 12.7104L16.0229 5.01813L16 5L15.9771 5.01813L5 12.7104V27.7246H11V18.7246C11 17.62 11.8954 16.7246 13 16.7246H19C20.1046 16.7246 21 17.62 21 18.7246V27.7246H27V12.7104ZM13 18.7246V27.7246H19V18.7246H13Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
