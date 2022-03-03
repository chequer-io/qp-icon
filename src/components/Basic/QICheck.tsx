import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QICheck: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M13 24.41L4 15.41L5.41 14L13 21.58L26.59 8L28 9.41L13 24.41Z"
      fill="black"
    />
  </SvgComponent>
);

export default QICheck;
