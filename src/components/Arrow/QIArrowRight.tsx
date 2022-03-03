import SvgComponent from '../../common/SvgComponent';

const QIArrowRight: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M18 6L16.57 7.39L24.15 15H4V17H24.15L16.57 24.57L18 26L28 16L18 6Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIArrowRight;
