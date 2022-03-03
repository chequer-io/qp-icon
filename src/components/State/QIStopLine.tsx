import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIStopLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 16C28 9.38 22.62 4 16 4C9.38 4 4 9.38 4 16C4 22.62 9.38 28 16 28C22.62 28 28 22.62 28 16ZM2 16C2 8.27 8.27002 2 16 2C23.73 2 30 8.27 30 16C30 23.73 23.73 30 16 30C8.27002 30 2 23.73 2 16ZM10 12C10 10.9 10.89 10 12 10H20C21.1 10 22 10.9 22 12V20C22 21.11 21.1 22 20 22H12C10.89 22 10 21.11 10 20V12ZM12 20H20V12H12V20Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIStopLine;
