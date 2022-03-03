import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIObjectPanel: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6H26V26H6V6ZM4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6ZM14 8H8V24H14V8Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIObjectPanel;
