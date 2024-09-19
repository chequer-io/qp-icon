import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIYoutube: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M2.24451 9.13816C2.37304 7.06045 3.96395 5.43214 5.94447 5.32912C8.81239 5.17993 12.9115 5 16 5C19.0885 5 23.1876 5.17993 26.0555 5.32912C28.0361 5.43214 29.627 7.06045 29.7555 9.13816C29.8786 11.1288 30 13.5781 30 15.5C30 17.4219 29.8786 19.8712 29.7555 21.8618C29.627 23.9396 28.0361 25.5679 26.0555 25.6709C23.1876 25.8201 19.0885 26 16 26C12.9115 26 8.81239 25.8201 5.94447 25.6709C3.96395 25.5679 2.37304 23.9396 2.24451 21.8618C2.12136 19.8712 2 17.4219 2 15.5C2 13.5781 2.12136 11.1288 2.24451 9.13816Z"
      fill="#FC0D1B"
    />
    <path
      d="M12.9999 11.2998V19.6998L20.9999 15.4998L12.9999 11.2998Z"
      fill="white"
    />
  </SvgComponent>
);
