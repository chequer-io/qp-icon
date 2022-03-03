import SvgComponent from '../../common/SvgComponent';

const QIChevronLeftSmall: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M12 16L19 9L20.41 10.41L14.83 16L20.41 21.59L19 23L12 16Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIChevronLeftSmall;
