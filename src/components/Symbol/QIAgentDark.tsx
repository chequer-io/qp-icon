import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAgentDark: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <g clipPath="url(#clip0_2111_917)">
      <path d="M0 0H32V32H0V0Z" fill="#222426" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7279 8.54416C17.669 6.48528 14.331 6.48528 12.2721 8.54416L8.54416 12.2721C6.48528 14.331 6.48528 17.669 8.54416 19.7279L12.2721 23.4558C14.331 25.5147 17.669 25.5147 19.7279 23.4558L20.5417 22.6421L18.6854 20.7858L18.2368 21.2344C17.0014 22.4697 14.9986 22.4697 13.7633 21.2344L10.7809 18.252C9.54559 17.0167 9.54559 15.0139 10.7809 13.7785L13.7633 10.7962C14.9986 9.56087 17.0014 9.56087 18.2368 10.7962L21.2191 13.7785C22.4544 15.0139 22.4544 17.0167 21.2191 18.252L20.9967 18.4745L22.853 20.3308L23.4558 19.7279C25.5147 17.669 25.5147 14.331 23.4558 12.2721L19.7279 8.54416ZM17.0962 13.3683C16.4785 12.7506 15.4771 12.7506 14.8594 13.3683L13.3683 14.8594C12.7506 15.4771 12.7506 16.4785 13.3683 17.0962L14.8594 18.5874C15.4771 19.205 16.4785 19.205 17.0962 18.5874L18.5874 17.0962C19.205 16.4785 19.205 15.4771 18.5874 14.8594L17.0962 13.3683Z"
        fill="white"
      />
      <g opacity="0.8" filter="url(#filter0_f_2111_917)">
        <path
          d="M55.0153 49.2512C49.7814 58.4163 29.9042 56.9178 10.6183 45.9042C-8.6676 34.8906 -20.0589 18.5325 -14.825 9.36736C-9.59106 0.20223 10.2862 1.70072 29.5721 12.7143C48.8579 23.728 60.2493 40.0861 55.0153 49.2512Z"
          fill="url(#paint0_linear_2111_917)"
        />
        <path
          d="M54.0526 -0.499269C52.8495 5.72514 39.487 8.37689 24.2064 5.42357C8.92585 2.47025 -2.48627 -4.96977 -1.28325 -11.1942C-0.0802441 -17.4186 13.2823 -20.0703 28.5629 -17.117C43.8435 -14.1637 55.2556 -6.72368 54.0526 -0.499269Z"
          fill="url(#paint1_linear_2111_917)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_2111_917"
        x="-22.0972"
        y="-24.3242"
        width="84.3847"
        height="85.5779"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="3"
          result="effect1_foregroundBlur_2111_917"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2111_917"
        x1="6.27433"
        y1="-13.5012"
        x2="44.0988"
        y2="2.46007"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.165" stopColor="#0C77E5" />
        <stop offset="1" stopColor="#50D485" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2111_917"
        x1="7.52247"
        y1="-24.062"
        x2="48.8367"
        y2="-2.06432"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6D31CE" />
        <stop offset="1" stopColor="#6D31CE" />
      </linearGradient>
      <clipPath id="clip0_2111_917">
        <rect width="32" height="32" rx="4" fill="white" />
      </clipPath>
    </defs>
  </SvgComponent>
);
