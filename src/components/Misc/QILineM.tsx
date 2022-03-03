import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QILineM: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M15 5H17V27H15V5Z" fill="black" />
  </SvgComponent>
);

export default QILineM;
