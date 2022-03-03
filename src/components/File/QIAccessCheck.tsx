import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIAccessCheck: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 28H13V30H6C4.90002 30 4 29.1 4 28V4C4 2.90002 4.90002 2 6 2H16C16.3 2 16.5 2.09998 16.7 2.30005L23.7 9.30005C23.9 9.5 24 9.69995 24 10V18H22V12H16C14.9 12 14 11.1 14 10V4H6V28ZM21.6 10L16 4.40002V10H21.6ZM17.41 24.59L20 27.1801L26.59 20.59L28 22L20 30L16 26L17.41 24.59Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIAccessCheck;
