import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

const QIShare: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M24 20C22.42 20 21.03 20.75 20.11 21.89L12.8 17.32C12.92 16.9 13 16.46 13 16C13 15.54 12.92 15.1 12.8 14.68L20.11 10.11C21.03 11.25 22.42 12 24 12C26.76 12 29 9.76 29 7C29 4.24 26.76 2 24 2C21.24 2 19 4.24 19 7C19 7.46 19.08 7.9 19.2 8.32L11.89 12.89C10.97 11.75 9.58 11 8 11C5.24 11 3 13.24 3 16C3 18.76 5.24 21 8 21C9.58 21 10.97 20.25 11.89 19.11L19.2 23.68C19.08 24.1 19 24.54 19 25C19 27.76 21.24 30 24 30C26.76 30 29 27.76 29 25C29 22.24 26.76 20 24 20ZM24 4C25.65 4 27 5.35 27 7C27 8.65 25.65 10 24 10C22.35 10 21 8.65 21 7C21 5.35 22.35 4 24 4ZM8 19C6.35 19 5 17.65 5 16C5 14.35 6.35 13 8 13C9.65 13 11 14.35 11 16C11 17.65 9.65 19 8 19ZM24 28C22.35 28 21 26.65 21 25C21 23.35 22.35 22 24 22C25.65 22 27 23.35 27 25C27 26.65 25.65 28 24 28Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIShare;