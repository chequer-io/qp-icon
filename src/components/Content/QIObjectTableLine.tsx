import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIObjectTableLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M27 3H5C4.46957 3 3.96089 3.21071 3.58582 3.58578C3.21074 3.96086 3 4.46957 3 5V27C3 27.5304 3.21074 28.0391 3.58582 28.4142C3.96089 28.7893 4.46957 29 5 29H27C27.5304 29 28.0391 28.7893 28.4142 28.4142C28.7893 28.0391 29 27.5304 29 27V5C29 4.46957 28.7893 3.96086 28.4142 3.58578C28.0391 3.21071 27.5304 3 27 3ZM27 5V11H5V5H27ZM17 13H27V19H17V13ZM15 19H5V13H15V19ZM5 21H15V27H5V21ZM17 27V21H27V27H17Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
