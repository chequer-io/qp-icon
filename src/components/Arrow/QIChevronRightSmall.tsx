import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIChevronRightSmall: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M20.41 16L13.41 23L12 21.59L17.58 16L12 10.41L13.41 9L20.41 16Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIChevronRightSmall;
