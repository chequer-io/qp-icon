import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIShieldSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M4.00004 14.8333L4.00002 6.66667C4.00002 6.66667 8.72457 5.98629 10.5454 5.23078C12.465 4.43431 16 2 16 2C16 2 19.5349 4.43431 21.4545 5.23078C23.2754 5.98629 28 6.66667 28 6.66667V14.8333C28 21.9577 22.88 28.3826 16 30C9.11999 28.3826 4.00004 21.9577 4.00004 14.8333Z"
      fill="black"
    />
  </SvgComponent>
);
