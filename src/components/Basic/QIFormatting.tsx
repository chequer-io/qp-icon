import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFormatting: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 4H4V6H28V4ZM4 9L12 16L4 23V9ZM28 26H4V28H28V26ZM14 20.5H28V22.5H14V20.5ZM28 15H14V17H28V15ZM14 9.5H28V11.5H14V9.5Z"
      fill="black"
    />
  </SvgComponent>
);
