import SvgComponent from '../../common/SvgComponent';

const QICheckBox: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M26 4H6C4.9 4 4 4.89 4 6V26C4 27.11 4.9 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.89 27.1 4 26 4ZM6 6H26V26H6V6Z"
      fill="black"
    />
  </SvgComponent>
);

export default QICheckBox;
