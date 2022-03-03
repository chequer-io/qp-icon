import SvgComponent from '../../common/SvgComponent';

const QIFailed: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 16C2 8.28 8.28 2 16 2C23.72 2 30 8.28 30 16C30 23.72 23.72 30 16 30C8.28 30 2 23.72 2 16ZM9 10.4143L14.5858 16L9.00001 21.5858L10.4142 23L16 17.4142L21.5858 23L23 21.5858L17.4142 16L23 10.4142L21.5858 9L16 14.5858L10.4142 9.00005L9 10.4143Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIFailed;
