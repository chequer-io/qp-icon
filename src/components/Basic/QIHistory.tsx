import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIHistory: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6.22998C8.60999 3.56 12.17 2 16 2C23.72 2 30 8.28003 30 16C30 23.72 23.72 30 16 30C8.28003 30 2 23.72 2 16H4C4 22.62 9.38 28 16 28C22.62 28 28 22.62 28 16C28 9.38 22.62 4 16 4C12.54 4 9.33997 5.47998 7.07996 8H12L10 10H4V4L6 2V6.22998ZM15 16.41L20.59 22L22 20.59L17 15.58V7H15V16.41Z"
      fill="black"
    />
  </SvgComponent>
);
