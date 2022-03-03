import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QICompany: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 28V4H8V28H24ZM24 2C25.1 2 26 2.90002 26 4V30H6V4C6 2.90002 6.89999 2 8 2H24ZM14 8H12V12H14V8ZM14 14H12V18H14V14ZM18 8H20V12H18V8ZM20 14H18V18H20V14ZM12 20H14V24H12V20ZM20 20H18V24H20V20Z"
      fill="black"
    />
  </SvgComponent>
);

export default QICompany;
