import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIWindows: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="#00ADEF"
    />
    <path
      d="M7 9.5485L14.356 8.54977L14.3592 15.6234L7.00672 15.6651L7 9.5485ZM14.3525 16.4384L14.3582 23.5182L7.00571 22.5105L7.0053 16.3909L14.3525 16.4384ZM15.2442 8.41912L24.9977 7V15.5334L15.2442 15.6106V8.41912ZM25 16.505L24.9977 25L15.2442 23.6276L15.2306 16.4891L25 16.505Z"
      fill="white"
    />
  </SvgComponent>
);
