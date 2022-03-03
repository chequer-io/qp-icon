import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIMessage: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8284 23L15.8284 29H13L21 21H26C27.11 21 28 20.11 28 19V7C28 5.89 27.11 5 26 5H6C4.89 5 4 5.89 4 7V19C4 20.11 4.89 21 6 21H15V23H6C3.79 23 2 21.21 2 19V7C2 4.79 3.79 3 6 3H26C28.21 3 30 4.79 30 7V19C30 21.21 28.21 23 26 23H21.8284ZM8 9H24V11H8V9ZM18 15H8V17H18V15Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIMessage;
