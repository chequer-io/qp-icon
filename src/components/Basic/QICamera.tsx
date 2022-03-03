import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QICamera: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 26C2 26.55 2.45001 27 3 27H29C29.55 27 30 26.55 30 26V9C30 8.44995 29.55 8 29 8H22.53L20.83 5.44995C20.65 5.17004 20.33 5 20 5H12C11.67 5 11.35 5.17004 11.16 5.44995L9.45999 8H3C2.45001 8 2 8.44995 2 9V26ZM28 25H4V10H10C10.33 10 10.65 9.82996 10.83 9.56006L12.53 7H19.46L21.17 9.56006C21.35 9.82996 21.67 10 22 10H28V25ZM10 17C10 20.3101 12.69 23 16 23C19.31 23 22 20.3101 22 17C22 13.6899 19.31 11 16 11C12.69 11 10 13.6899 10 17ZM12 17C12 14.79 13.79 13 16 13C18.21 13 20 14.79 20 17C20 19.21 18.21 21 16 21C13.79 21 12 19.21 12 17Z"
      fill="black"
    />
  </SvgComponent>
);

export default QICamera;
