import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIUpload: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4L23 11L21.59 12.41L17 7.82821L17 24H15L15 7.82821L10.41 12.41L9 11L16 4ZM4 28L28 28V26C26.89 26 4 26 4 26V28Z"
      fill="#656C72"
    />
  </SvgComponent>
);
