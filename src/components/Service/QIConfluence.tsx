import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIConfluence: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.87031 22.322C4.6221 22.7433 4.34333 23.2321 4.10657 23.6216C3.89465 23.9942 4.00842 24.4749 4.36242 24.7025L9.32677 27.8819C9.50103 27.9939 9.71119 28.0283 9.91009 27.9775C10.109 27.9267 10.2799 27.7949 10.3846 27.6117C10.5831 27.2659 10.839 26.8168 11.1177 26.3359C13.0844 22.9579 15.0625 23.3712 18.6292 25.1437L23.5515 27.5799C23.7379 27.6722 23.9524 27.6821 24.1459 27.6072C24.3394 27.5323 24.4956 27.3791 24.5788 27.1824L26.9426 21.6186C27.1096 21.2212 26.9396 20.7578 26.5607 20.5773C25.522 20.0686 23.4561 19.0552 21.5963 18.1213C14.9059 14.7392 9.21984 14.9578 4.87031 22.322Z"
      fill="url(#paint0_linear_2950_88)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.1297 9.6955C27.3779 9.27424 27.6567 8.78541 27.8934 8.39594C28.1054 8.02324 27.9916 7.54258 27.6376 7.31496L22.6732 4.13559C22.4976 4.01245 22.2806 3.97076 22.0743 4.0205C21.8679 4.07023 21.6907 4.20691 21.5849 4.39789C21.3863 4.74365 21.1305 5.19273 20.8517 5.67361C18.8851 9.05168 16.907 8.63837 13.3403 6.86587L8.43321 4.44161C8.24678 4.34926 8.03237 4.3394 7.83884 4.41427C7.64532 4.48914 7.48916 4.64237 7.40597 4.83903L5.04218 10.4029C4.87517 10.8003 5.0451 11.2636 5.42405 11.4442C6.46275 11.9529 8.52868 12.9663 10.3884 13.9002C17.0941 17.2783 22.7802 17.0518 27.1297 9.6955Z"
      fill="url(#paint1_linear_2950_88)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2950_88"
        x1="26.8089"
        y1="29.5232"
        x2="20.8665"
        y2="16.424"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.18" stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2950_88"
        x1="5.19111"
        y1="2.49027"
        x2="11.1428"
        y2="15.5956"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.18" stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </SvgComponent>
);
