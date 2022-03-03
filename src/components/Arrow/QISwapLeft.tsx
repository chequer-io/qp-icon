import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QISwapLeft: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9L4 16L11 23L12.41 21.59L7.82821 17L28 17L28 15L7.82821 15L12.41 10.41L11 9Z"
      fill="black"
    />
  </SvgComponent>
);

export default QISwapLeft;
