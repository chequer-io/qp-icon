import * as React from 'react';
import { SVGProps } from 'react';

const SvgTemp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 11.487a.463.463 0 0 1-.336-.14L.139 4.321a.475.475 0 0 1 .673-.673L7.5 10.338l6.688-6.689a.476.476 0 0 1 .673.673l-7.025 7.024a.463.463 0 0 1-.336.14Z"
      fill="#222529"
    />
  </svg>
);

export default SvgTemp;
