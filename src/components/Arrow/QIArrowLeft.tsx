import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QIArrowLeft: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M14 26L15.41 24.59L7.83002 17H28V15H7.83002L15.41 7.41L14 6L4 16L14 26Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIArrowLeft;
