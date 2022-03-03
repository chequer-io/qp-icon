import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIDotS: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <circle cx="16" cy="16" r="4" fill="black" />
  </SvgComponent>
);

export default QIDotS;
