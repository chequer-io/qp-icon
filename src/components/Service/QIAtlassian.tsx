import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAtlassian: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7118 15.0077C10.5547 14.802 10.3016 14.6934 10.0444 14.7214C9.78714 14.7493 9.56324 14.9098 9.45396 15.1445L3.08041 27.8966C2.96236 28.1329 2.97498 28.4135 3.11376 28.6382C3.25255 28.863 3.49771 28.9998 3.76171 28.9998H12.6366C12.927 29.0066 13.194 28.8413 13.3179 28.5784C15.2323 24.6197 14.0721 18.6004 10.7118 15.0077Z"
      fill="url(#paint0_linear_2988_39)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3864 3.40909C12.1556 8.38384 11.7827 14.6939 14.4051 20.0151L18.6838 28.5784C18.8128 28.8367 19.0766 28.9998 19.3651 28.9998H28.2383C28.5023 28.9998 28.7475 28.863 28.8863 28.6383C29.0251 28.4136 29.0377 28.1329 28.9196 27.8966C28.9196 27.8966 16.9821 4.00196 16.6821 3.40431C16.5611 3.15606 16.3088 2.99899 16.0328 3C15.7568 3.00102 15.5056 3.15996 15.3864 3.40909Z"
      fill="#2684FF"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2988_39"
        x1="14.2047"
        y1="16.9757"
        x2="5.26503"
        y2="26.5721"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="0.923" stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </SvgComponent>
);
