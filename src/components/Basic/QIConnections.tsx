import React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIConnections: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6H28V8H10V6ZM10 24H28V26H10V24ZM28 15H10V17H28V15ZM4 15H6V17H4V15ZM6 6H4V8H6V6ZM4 24H6V26H4V24Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIConnections;
