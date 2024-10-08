import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPrivateSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6.66667L4.00002 14.8333C4.00002 21.9577 9.11998 28.3826 16 30C22.88 28.3826 28 21.9577 28 14.8333V6.66667C28 6.66667 23.2754 5.98629 21.4545 5.23078C19.5349 4.43431 16 2 16 2C16 2 12.465 4.43431 10.5454 5.23078C8.72455 5.98629 4 6.66667 4 6.66667ZM17.5 10.5C17.5 11.3284 16.8284 12 16 12C15.1716 12 14.5 11.3284 14.5 10.5C14.5 9.67157 15.1716 9 16 9C16.8284 9 17.5 9.67157 17.5 10.5ZM17 15V23H15V15H17Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
