import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIChevronDown: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16 21.41L6 11.41L7.41 10L16 18.58L24.59 10L26 11.41L16 21.41Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIChevronDown;
