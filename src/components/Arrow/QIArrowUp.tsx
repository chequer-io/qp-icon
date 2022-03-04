import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

const QIArrowUp: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16 4L6 14L7.41 15.41L15 7.83V28H17V7.83L24.59 15.41L26 14L16 4Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIArrowUp;