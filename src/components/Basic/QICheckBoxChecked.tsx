import SvgComponent from '../../common/SvgComponent';

const QICheckBoxChecked: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4H26C27.1 4 28 4.89001 28 6V26C28 27.11 27.1 28 26 28H6C4.90002 28 4 27.11 4 26V6C4 4.89001 4.90002 4 6 4ZM26 6H6V26H26V6ZM9 16.54L14 21.5L23 12.58L21.41 11L14 18.35L10.59 15L9 16.54Z"
      fill="black"
    />
  </SvgComponent>
);

export default QICheckBoxChecked;
