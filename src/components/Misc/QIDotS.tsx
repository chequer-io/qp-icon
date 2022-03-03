import SvgComponent from '../../common/SvgComponent';

const QIDotS: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <circle cx="16" cy="16" r="4" fill="black" />
  </SvgComponent>
);

export default QIDotS;
