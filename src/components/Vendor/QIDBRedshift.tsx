import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBRedshift: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <g clipPath="url(#clip0_7_1516)">
      <path
        d="M15.77 22.88L25.66 25.23V6.70999L15.77 9.06998V22.88Z"
        fill="#205B97"
      />
      <path
        d="M25.6599 6.70999L27.5399 7.70999V24.34L25.6599 25.28V6.70999ZM15.7699 22.88L5.87988 25.23V6.70999L15.7699 9.06998V22.88Z"
        fill="#5193CE"
      />
      <path
        d="M5.88 6.70999L4 7.70999V24.34L5.88 25.28V6.70999Z"
        fill="#205B97"
      />
      <path
        d="M18.2699 29L22.0399 27.12V4.87997L18.2699 2.99997L17.1199 15.35L18.2699 29Z"
        fill="#5193CE"
      />
      <path
        d="M13.27 29L9.48999 27.15V4.87997L13.26 2.99997L14.41 15.35L13.27 29Z"
        fill="#205B97"
      />
      <path d="M13.27 2.99997H18.34V28.95H13.27V2.99997Z" fill="#2E73B7" />
    </g>
    <defs>
      <clipPath id="clip0_7_1516">
        <rect
          width="23.54"
          height="26"
          fill="white"
          transform="translate(4 3)"
        />
      </clipPath>
    </defs>
  </SvgComponent>
);
