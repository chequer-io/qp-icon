import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIClose: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M25 8.4L23.6 7L16 14.6L8.4 7.00001L7 8.40001L14.6 16L6.99999 23.6L8.39999 25L16 17.4L23.6 25L25 23.6L17.4 16L25 8.4Z"
      fill="black"
    />
  </SvgComponent>
);
