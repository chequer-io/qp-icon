import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIAzureCloud: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="#0072C6"
    />
    <path
      d="M17.1126 6L10.0374 12.1354L4 22.9728H9.44416L17.1126 6ZM18.0534 7.4352L15.0342 15.9456L20.824 23.2195L9.592 25.1491H28L18.0534 7.4352Z"
      fill="white"
    />
  </SvgComponent>
);

export default QIAzureCloud;
