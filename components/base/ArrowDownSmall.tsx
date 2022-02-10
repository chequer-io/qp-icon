import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowDownSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.343 10.788a.432.432 0 0 1-.314-.131L3.13 5.758a.444.444 0 0 1 .628-.628l4.585 4.584 4.584-4.584a.444.444 0 0 1 .628.628l-4.898 4.899a.432.432 0 0 1-.314.13Z"
      fill="#222529"
    />
  </svg>
);

export default SvgArrowDownSmall;
