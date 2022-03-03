import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QISwapRight: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 23L28 16L21 9L19.59 10.41L24.1718 15L4 15L4 17L24.1718 17L19.59 21.59L21 23Z"
      fill="black"
    />
  </SvgComponent>
);

export default QISwapRight;
