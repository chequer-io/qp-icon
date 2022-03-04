import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

const QIWorkspace: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.71 9.29004L16.71 2.29004C16.52 2.09998 16.26 2 16 2H6C4.89999 2 4 2.90002 4 4V28C4 29.1001 4.89999 30 6 30H18V28H6V4H14V10C14 11.1 14.9 12 16 12H22V16H24V10C24 9.72998 23.89 9.47998 23.71 9.29004ZM16 4.41003L21.59 10H16V4.41003ZM18 18H20L21 23L22 18H24L25 23L26 18H28L26 28H24L23 23L22 28H20L18 18Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIWorkspace;
