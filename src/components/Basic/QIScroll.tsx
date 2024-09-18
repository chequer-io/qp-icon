import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIScroll: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M31 5L29.5895 6.40991L26.9987 3.83008V12.1699L29.5895 9.59009L31 11L25.9983 16L20.9967 11L22.4071 9.59009L24.998 12.1699V3.83008L22.4071 6.40991L20.9967 5L25.9983 0L31 5Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.9973 16C22.4572 16 21.967 16.1499 21.5269 16.3999C20.9967 15.5601 20.0664 15 18.996 15C18.4558 15 17.9657 15.1499 17.5255 15.3999C16.9953 14.5601 16.065 14 14.9947 14C14.6446 14 14.3044 14.0701 13.9943 14.1799V9C13.9943 7.3501 12.6439 6 10.9933 6C9.34278 6 7.99234 7.3501 7.99234 9V20.1001L5.76158 18.5701C5.24142 18.2 4.63122 17.99 4.001 17.99C2.35046 17.99 1 19.3401 1 20.99C1 21.79 1.3101 22.55 1.8803 23.1201L9.89297 30.4299C11.0033 31.4399 12.5038 32 14.0043 32H19.006C22.8673 32 26.0083 28.8601 26.0083 25V19C26.0083 17.3501 24.6579 16 23.0073 16H22.9973ZM23.9977 25C23.9977 27.76 21.7569 30 18.996 30H13.9943C12.994 30 11.9737 29.6299 11.2334 28.96L3.28076 21.71C3.09069 21.52 2.99067 21.27 2.99067 21.01C2.99067 20.46 3.44082 20.01 3.991 20.01C4.21108 20.01 4.41114 20.0801 4.59119 20.21L9.99301 23.9099V9C9.99301 8.44995 10.4432 8 10.9933 8C11.5435 8 11.9937 8.44995 11.9937 9V20H13.9943V17C13.9943 16.45 14.4445 16 14.9947 16C15.5448 16 15.995 16.45 15.995 17V20H17.9957V18C17.9957 17.45 18.4458 17 18.996 17C19.5462 17 19.9963 17.45 19.9963 18V20H21.997V19C21.997 18.45 22.4472 18 22.9973 18C23.5475 18 23.9977 18.45 23.9977 19V25Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
