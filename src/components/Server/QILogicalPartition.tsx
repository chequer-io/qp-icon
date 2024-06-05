import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QILogicalPartition: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 18V22H30V30H22V22H25V18H17V22H20V30H12V22H15V18H7V22H10V30H2V22H5V18C5 16.9 5.9 16 7 16H15V12H6C4.9 12 4 11.1 4 10V4C4 2.9 4.9 2 6 2H26C27.1 2 28 2.9 28 4V10C28 11.1 27.1 12 26 12H17V16H25C26.1 16 27 16.9 27 18ZM4 24V28H8V24H4ZM18 28V24H14V28H18ZM6 4V10H26V4H6ZM24 24V28H28V24H24ZM10 7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7Z"
      fill="#818589"
    />
  </SvgComponent>
);
