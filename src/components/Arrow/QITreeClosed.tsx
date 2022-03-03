import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QITreeClosed: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 16L13 9L13 23L21 16Z"
      fill="black"
    />
  </SvgComponent>
);

export default QITreeClosed;
