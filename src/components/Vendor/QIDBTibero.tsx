import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBTibero: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M13.0477 13.7745H8.2538L9.36248 8.55382H26.659L25.5451 13.7745H20.7512L17.727 28H10.0235L13.0477 13.7745Z"
      fill="#00448C"
    />
    <path d="M15.01 11.375H6L7.89985 3H16.9151L15.01 11.375Z" fill="#E00012" />
  </SvgComponent>
);
