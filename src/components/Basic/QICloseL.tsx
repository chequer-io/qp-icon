import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICloseL: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M28 5.4L26.6 4L16 14.6L5.40016 4L4.00016 5.4L14.6 16L4.00002 26.6L5.40003 28L16 17.4L26.6 28L28 26.6L17.4 16L28 5.4Z"
      fill="black"
    />
  </SvgComponent>
);
