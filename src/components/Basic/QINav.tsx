import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QINav: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.4702 12.6071L29.99 8L26.4802 3.39391C26.291 3.14569 25.9968 3 25.6848 3H17.01V0H15.01V3H5.00001C4.44772 3 4.00001 3.44772 4.00001 4V12C4.00001 12.5523 4.44772 13 5.00001 13H14.98V15H6.30524C5.99316 15 5.69898 15.1457 5.50984 15.3939L2 20L5.51982 24.6071C5.70901 24.8547 6.00282 25 6.31445 25H14.99V32H16.99V25H26.99C27.5423 25 27.99 24.5523 27.99 24V16C27.99 15.4477 27.5423 15 26.99 15H17V13H25.6756C25.9872 13 26.281 12.8547 26.4702 12.6071ZM25.1895 5L27.4743 7.99841L25.1811 11H6.00001V5H25.1895ZM6.80047 17L4.51568 19.9984L6.8089 23H25.99V17H6.80047Z"
      fill="#7E848A"
    />
  </SvgComponent>
);