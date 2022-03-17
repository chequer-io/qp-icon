import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDrag: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M14 6H10V10H14V6Z" fill="black" />
    <path d="M22 6H18V10H22V6Z" fill="black" />
    <path d="M14 14H10V18H14V14Z" fill="black" />
    <path d="M22 14H18V18H22V14Z" fill="black" />
    <path d="M14 22H10V26H14V22Z" fill="black" />
    <path d="M22 22H18V26H22V22Z" fill="black" />
  </SvgComponent>
);
