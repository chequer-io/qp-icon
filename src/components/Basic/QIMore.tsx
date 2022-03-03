import React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIMore: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6C17.1 6 18 6.90002 18 8C18 9.10999 17.1 10 16 10C14.89 10 14 9.10999 14 8C14 6.90002 14.89 6 16 6ZM16 14C17.1 14 18 14.9 18 16C18 17.11 17.1 18 16 18C14.89 18 14 17.11 14 16C14 14.9 14.89 14 16 14ZM18 24C18 22.9 17.1 22 16 22C14.89 22 14 22.9 14 24C14 25.11 14.89 26 16 26C17.1 26 18 25.11 18 24Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIMore;
