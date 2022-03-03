import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIShrink: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.59 2L30 3.42004L21.41 12H28V14H18V4H20V10.59L28.59 2ZM4 20V18H14V28H12V21.41L3.41 30L2 28.58L10.59 20H4Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIShrink;
