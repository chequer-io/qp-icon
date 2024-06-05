import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIGroup: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13C18.2091 13 20 11.2091 20 9C20 6.79086 18.2091 5 16 5C13.7909 5 12 6.79086 12 9C12 11.2091 13.7909 13 16 13ZM16 15C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3C12.6863 3 10 5.68629 10 9C10 12.3137 12.6863 15 16 15Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 27C10.2091 27 12 25.2091 12 23C12 20.7909 10.2091 19 8 19C5.79086 19 4 20.7909 4 23C4 25.2091 5.79086 27 8 27ZM8 29C11.3137 29 14 26.3137 14 23C14 19.6863 11.3137 17 8 17C4.68629 17 2 19.6863 2 23C2 26.3137 4.68629 29 8 29Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 27C26.2091 27 28 25.2091 28 23C28 20.7909 26.2091 19 24 19C21.7909 19 20 20.7909 20 23C20 25.2091 21.7909 27 24 27ZM24 29C27.3137 29 30 26.3137 30 23C30 19.6863 27.3137 17 24 17C20.6863 17 18 19.6863 18 23C18 26.3137 20.6863 29 24 29Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 14V19H15V14H17Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 16.8482L19.9961 19.1318L19.0039 20.8682L16 19.1518L12.9961 20.8682L12.0039 19.1318L16 16.8482Z"
      fill="#818589"
    />
  </SvgComponent>
);
