import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QISequence: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 9V21H10V23H4V21H6V12H4V10H6V9H8ZM22 9H26C26.5304 9 27.0391 9.21074 27.4142 9.58582C27.7893 9.96089 28 10.4696 28 11V21C28 21.5304 27.7893 22.0391 27.4142 22.4142C27.0391 22.7893 26.5304 23 26 23H22V21H26V17H23V15H26V11H22V9ZM13 21H15V23H13V21ZM19 21H17V23H19V21Z"
      fill="black"
    />
  </SvgComponent>
);
