import SvgComponent from '../../common/SvgComponent';

const QILogin: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 30H26C27.1 30 28 29.1 28 28V4C28 2.90002 27.1 2 26 2H14C12.9 2 12 2.90002 12 4V7H14V4H26V28H14V25H12V28C12 29.1 12.9 30 14 30ZM18.17 17L14.59 20.59L16 22L22 16L16 10L14.59 11.41L18.17 15H4V17H18.17Z"
      fill="black"
    />
  </SvgComponent>
);

export default QILogin;
