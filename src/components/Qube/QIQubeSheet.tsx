import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeSheet: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#34A853"
    />
    <path d="M19 2L26 9H19V2Z" fill="#0E8131" />
    <path
      d="M12 13.5H11.5V14V15.5V16V18V18.5V20V20.5H12H14.5H15H17H17.5H20H20.5V20V18.5V18V16V15.5V14V13.5H20H17.5H17H15H14.5H12ZM12.5 17.5V16.5H14.5V17.5H12.5ZM15.5 17.5V16.5H16.5V17.5H15.5ZM16.5 15.5H15.5V14.5H16.5V15.5ZM17.5 17.5V16.5H19.5V17.5H17.5ZM15.5 18.5H16.5V19.5H15.5V18.5ZM10.5 13C10.5 12.7239 10.7239 12.5 11 12.5H21C21.2761 12.5 21.5 12.7239 21.5 13V21C21.5 21.2761 21.2761 21.5 21 21.5H11C10.7239 21.5 10.5 21.2761 10.5 21V13Z"
      fill="white"
      stroke="white"
    />
  </SvgComponent>
);