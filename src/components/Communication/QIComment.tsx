import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIComment: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8284 23L15.8284 29H13L21 21H26C27.11 21 28 20.11 28 19V7C28 5.89001 27.11 5 26 5H6C4.89001 5 4 5.89001 4 7V19C4 20.11 4.89001 21 6 21H15V23H6C3.79004 23 2 21.21 2 19V7C2 4.79004 3.79004 3 6 3H26C28.21 3 30 4.79004 30 7V19C30 21.21 28.21 23 26 23H21.8284ZM6 12H11V14H6V12ZM13 12H20V14H13V12ZM17 16H11V18H17V16ZM19 18V16H25V18H19ZM26 12H22V14H26V12ZM6 16H9V18H6V16Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIComment;
