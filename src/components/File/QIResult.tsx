import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIResult: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 5H25C26.1 5 27 5.90002 27 7V28C27 29.1101 26.1 30 25 30H7C5.89001 30 5 29.1101 5 28V7C5 5.90002 5.89001 5 7 5H10V4C10 2.90002 10.89 2 12 2H20C21.1 2 22 2.90002 22 4V5ZM20 4H12V8H20V4ZM7 28H25V7H22V10H10V7H7V28ZM14 13H22V15H14V13ZM14 18H22V20H14V18ZM12 23H10V25H12V23ZM22 23H14V25H22V23ZM12 18H10V20H12V18ZM12 13H10V15H12V13Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIResult;
