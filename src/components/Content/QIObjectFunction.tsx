import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIObjectFunction: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9132 4C12.8788 4 12.0151 4.78877 11.9214 5.81893L11.2686 13H7V15H11.0868L10.0868 26H5V28H10.0868C11.1212 28 11.9849 27.2112 12.0786 26.1811L13.095 15H18V13H13.2769L13.9132 6H19V4H13.9132ZM24 17H26L23 22.5L26 28H24L22 24.3333L20 28H18L21 22.5L18 17H20L22 20.6667L24 17Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIObjectFunction;
