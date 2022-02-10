import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUpSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.343 5.212a.432.432 0 0 0-.314.131L2.13 10.242a.444.444 0 0 0 .628.628l4.585-4.584 4.584 4.584a.444.444 0 1 0 .628-.628L7.657 5.343a.432.432 0 0 0-.314-.13Z"
      fill="#222529"
    />
  </svg>
);

export default SvgArrowUpSmall;
