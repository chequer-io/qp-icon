import SvgComponent from '../../common/SvgComponent';

const QIMinus: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path d="M25 15H7V17H25V15Z" fill="black" />
  </SvgComponent>
);

export default QIMinus;
