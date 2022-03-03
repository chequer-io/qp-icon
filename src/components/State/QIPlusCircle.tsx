import SvgComponent from '../../common/SvgComponent';

const QIPlusCircle: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16 2C8.4 2 2 8.4 2 16C2 23.6 8.4 30 16 30C23.6 30 30 23.6 30 16C30 8.4 23.6 2 16 2ZM24 17H17V24H15V17H8V15H15V8H17V15H24V17Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIPlusCircle;
