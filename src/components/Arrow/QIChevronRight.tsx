import type { FC } from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSvgProps } from '../../../typings';

const QIChevronRight: FC<CustomizedSvgProps> = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M21.41 16L11.41 26L10 24.59L18.58 16L10 7.41L11.41 6L21.41 16Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIChevronRight;
