import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIScope: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M23 15H31V17H23V15Z" fill="#7E848A" />
    <path d="M17 1V9H15V1L17 1Z" fill="#7E848A" />
    <path d="M17 23V31H15V23H17Z" fill="#7E848A" />
    <path d="M1 15H9V17H1V15Z" fill="#7E848A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 16C6 21.5229 10.4772 26 16 26C21.5228 26 26 21.5229 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16ZM4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37259 4 4 9.37258 4 16Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
