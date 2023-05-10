import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBHTTP: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M7.7 15.66H3.05V12H2V20.46H3.05V16.61H7.7V20.46H8.75V12H7.7V15.66Z"
      fill="black"
    />
    <path
      d="M9.65991 12.95H12.3799V20.46H13.4399V12.95H16.1599V12H9.65991V12.95Z"
      fill="black"
    />
    <path
      d="M16.54 12.95H19.27V20.46H20.32V12.95H23.05V12H16.54V12.95Z"
      fill="black"
    />
    <path
      d="M29.64 13.29C29.41 12.88 29.09 12.57 28.69 12.34C28.28 12.11 27.81 12 27.28 12H24V20.46H25.05V17.44H27.27C27.8 17.44 28.27 17.32 28.68 17.09C29.09 16.86 29.4 16.54 29.63 16.13C29.86 15.72 29.98 15.25 29.98 14.71C29.98 14.16 29.86 13.69 29.63 13.29H29.64ZM28.91 14.73C28.91 15.28 28.74 15.72 28.41 16.04C28.08 16.35 27.61 16.51 27 16.51H25.05V12.94H27C27.61 12.94 28.07 13.1 28.41 13.41C28.74 13.72 28.91 14.16 28.91 14.72V14.73Z"
      fill="black"
    />
  </SvgComponent>
);
