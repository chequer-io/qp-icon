import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QILockSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 14H24C25.11 14 26 14.89 26 16V28C26 29.11 25.11 30 24 30H8C6.89 30 6 29.11 6 28V16C6 14.89 6.89 14 8 14H10V8C10 4.69 12.69 2 16 2C19.31 2 22 4.69 22 8V14ZM16 4C13.79 4 12 5.79 12 8V14H20V8C20 5.79 18.21 4 16 4ZM17 22.7324C17.5978 22.3866 18 21.7403 18 21C18 19.8954 17.1046 19 16 19C14.8954 19 14 19.8954 14 21C14 21.7403 14.4022 22.3866 15 22.7324V25H17V22.7324Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
