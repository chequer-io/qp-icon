import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIChevronLeft: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M10 16L20 6L21.41 7.41L12.83 16L21.41 24.59L20 26L10 16Z"
      fill="black"
    />
  </SvgComponent>
);
