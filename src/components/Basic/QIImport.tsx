import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIImport: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.59 12.59L26 14L16 24L6 14L7.41 12.59L15 20.17V2H17V20.17L24.59 12.59ZM26 28V24H28V28C28 29.11 27.1 30 26 30H6C4.89 30 4 29.11 4 28V24H6V28H26Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIImport;
