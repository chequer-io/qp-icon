import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQueryResult: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H27C27.5305 3 28.0391 3.21072 28.4142 3.58578C28.7892 3.96085 29 4.46957 29 5V16H27V11H17V16H15V11H5V18H11V20H5V27H11V29H5C3.89545 29 3 28.1046 3 27V5C3 4.46957 3.21075 3.96085 3.58582 3.58578C3.96088 3.21072 4.46954 3 5 3ZM5 9H27V5H5V9ZM17 28C18.1 28 19 27.1 19 26V24C19 22.9 18.1 22 17 22H15V20H19V18H15C13.9 18 13 18.9 13 20V22C13 23.1 13.9 24 15 24H17V26H13V28H17ZM24 18C25.1 18 26 18.9 26 20V26C26 27.1 25.1 28 24 28V29H26V31H24C22.9 31 22 30.1 22 29V28C20.9 28 20 27.1 20 26V20C20 18.9 20.9 18 22 18H24ZM29 18H27V28H32V26H29V18ZM22 20H24V26H22V20Z"
      fill="black"
    />
  </SvgComponent>
);
