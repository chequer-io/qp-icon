import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.985 15a.475.475 0 0 1-.336-.813L10.337 7.5 3.649.812a.475.475 0 0 1 .672-.673l7.024 7.024a.475.475 0 0 1 0 .673L4.321 14.86a.463.463 0 0 1-.336.14Z"
      fill="#222529"
    />
  </svg>
);

export default SvgArrowRight;
