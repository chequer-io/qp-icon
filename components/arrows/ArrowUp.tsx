import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.525 11.487a.463.463 0 0 1-.337-.14L7.5 4.656l-6.688 6.69a.476.476 0 0 1-.673-.673l7.025-7.025a.475.475 0 0 1 .672 0l7.025 7.025a.476.476 0 0 1-.336.813Z"
      fill="#222529"
    />
  </svg>
);

export default SvgArrowUp;
