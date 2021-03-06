import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAgentPrimary: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M9.71883 9.76043C6.32995 13.2012 6.08412 18.6921 9.12183 22.4359L12.7917 18.7278C11.5625 16.7489 12.1244 14.1282 14.0735 12.8803C15.4431 12.0067 17.1814 12.0067 18.551 12.8803L22.2208 9.15429C18.5159 6.07011 13.1077 6.31969 9.71883 9.76043Z"
      fill="#57A9CF"
    />
    <path
      d="M23.3624 10.3311L19.7277 14.0393C21.027 15.9647 20.5529 18.6032 18.6566 19.9224C17.2343 20.9208 15.3555 20.9208 13.9332 19.9224L10.2809 23.6128C14.179 26.9822 20.0437 26.5008 23.3624 22.5431C26.3123 19.0311 26.3123 13.861 23.3624 10.3311Z"
      fill="#121E40"
    />
    <path d="M26.7512 27V21.2951L21.1148 27H26.7512Z" fill="#57A9CF" />
  </SvgComponent>
);
