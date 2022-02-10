import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.01 15a.463.463 0 0 1-.337-.14L3.649 7.836a.475.475 0 0 1 0-.673L10.673.14a.475.475 0 0 1 .672.673L4.657 7.499l6.688 6.688a.475.475 0 0 1-.336.813Z"
      fill="#222529"
    />
  </svg>
);

export default SvgArrowLeft;
