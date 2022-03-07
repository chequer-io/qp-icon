import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIWindows: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="#00ADEF"
    />
    <path
      d="M5 8.11484L13.9907 6.89417L13.9946 15.5397L5.00821 15.5907L5 8.11484ZM13.9864 16.5358L13.9934 25.1889L5.00698 23.9572L5.00647 16.4778L13.9864 16.5358ZM15.0763 6.73448L26.9972 5V15.4298L15.0763 15.5241V6.73448ZM27 16.6172L26.9972 27L15.0763 25.3227L15.0596 16.5978L27 16.6172Z"
      fill="white"
    />
  </SvgComponent>
);
