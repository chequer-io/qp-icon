import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QITableExpand: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32L5 20L27 20L16 32Z"
      fill="#656C72"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0L5 12L27 12L16 0Z"
      fill="#656C72"
    />
  </SvgComponent>
);
