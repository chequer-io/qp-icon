import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

const QIRole: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C14.76 4 17 6.23999 17 9C17 11.76 14.76 14 12 14C9.23999 14 7 11.76 7 9C7 6.23999 9.23999 4 12 4ZM12 2C8.13 2 5 5.13 5 9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2ZM22 23V30H20V23C20 20.24 15.76 20 13 20H11C8.23999 20 4 20.24 4 23V30H2V23C2 19.14 7.14001 18.01 11 18H13C16.86 18.01 21.99 19.14 22 23ZM22.41 14L25 16.59L30.59 11L32 12.41L25 19.41L21 15.41L22.41 14Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIRole;
