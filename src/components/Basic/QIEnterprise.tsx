import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIEnterprise: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 4H9V28H23V4ZM7 4V10H4C2.89543 10 2 10.8954 2 12V30H30V14C30 12.8954 29.1046 12 28 12H25V4C25 2.89543 24.1046 2 23 2H9C7.89543 2 7 2.89543 7 4ZM7 12V28H4V12H7ZM25 28V14H28V28H25ZM11 7.5H15V9.5H11V7.5ZM11 12.5H15V14.5H11V12.5ZM17 12.5V14.5H21V12.5H17ZM11 17.5H15V19.5H11V17.5ZM17 17.5V19.5H21V17.5H17ZM11 22.5H15V24.5H11V22.5ZM17 22.5V24.5H21V22.5H17ZM17 7.5V9.5H21V7.5H17Z"
      fill="black"
    />
  </SvgComponent>
);
