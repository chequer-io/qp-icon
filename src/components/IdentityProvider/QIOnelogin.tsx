import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIOnelogin: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
      fill="#1F1F1F"
    />
    <path
      d="M12.6482 11.5844C12.5114 11.5845 12.3802 11.639 12.2834 11.7357C12.1867 11.8325 12.1322 11.9637 12.132 12.1005V14.4227C12.1322 14.5595 12.1867 14.6907 12.2834 14.7875C12.3802 14.8843 12.5114 14.9387 12.6482 14.9389H14.4597V20.7894C14.4599 20.9263 14.5143 21.0575 14.6111 21.1542C14.7079 21.251 14.8391 21.3054 14.9759 21.3056H17.2981C17.435 21.3054 17.5662 21.251 17.6629 21.1542C17.7597 21.0575 17.8141 20.9263 17.8143 20.7894V12.1005C17.8141 11.9637 17.7597 11.8325 17.6629 11.7357C17.5662 11.639 17.435 11.5845 17.2981 11.5844H12.6482Z"
      fill="white"
    />
  </SvgComponent>
);
