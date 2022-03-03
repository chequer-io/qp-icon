import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QINewTab: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 2H26V6H30V8H26V12H24V8H20V6H24V2ZM6 6V26H26V16H28V26C28 27.1 27.1 28 26 28H6C4.90002 28 4 27.1 4 26V6C4 4.90002 4.90002 4 6 4H16V6H6Z"
      fill="black"
    />
  </SvgComponent>
);

export default QINewTab;
