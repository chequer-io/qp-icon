import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIStorageRequest: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7H4V10H2V7C2 5.9 2.9 5 4 5H7V7ZM2 22H4V25H7V27H4C2.9 27 2 26.1 2 25V22ZM23 5H17V7H23V5ZM9 5H15V7H9V5ZM23 25H17V27H23V25ZM4 15H28V12H30V20H28V17H4V20H2V12H4V15ZM28 25H25V27H28C29.1 27 30 26.1 30 25V22H28V25ZM25 5H28C29.1 5 30 5.9 30 7V10H28V7H25V5ZM15 25H9V27H15V25ZM7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12ZM8 21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21C6 20.4477 6.44772 20 7 20C7.55228 20 8 20.4477 8 21Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
