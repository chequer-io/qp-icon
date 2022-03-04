import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QICheckBoxCheckedSolid: CustomizedSVGComponent = ({
  ...props
}) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M26 4H6C4.9 4 4 4.9 4 6V26C4 27.11 4.9 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.9 27.1 4 26 4ZM14 21.5L9 16.54L10.59 15L14 18.35L21.41 11L23 12.58L14 21.5Z"
      fill="black"
    />
  </SvgComponent>
);
