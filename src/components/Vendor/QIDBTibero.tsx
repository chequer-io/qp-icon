import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBTibero: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M12.3244 14.0675H6.95522L8.19695 8.22028H27.569L26.3215 14.0675H20.9523L17.5653 30H8.93732L12.3244 14.0675Z"
      fill="#00448C"
    />
    <path
      d="M14.5222 11.38H4.43097L6.55881 2H16.6558L14.5222 11.38Z"
      fill="#E00012"
    />
  </SvgComponent>
);
