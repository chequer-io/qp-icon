import SvgComponent from '../../common/SvgComponent';

const QIPlayCircleLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM14 12.6433L14 19.3567L19.2747 16L14 12.6433ZM13.5369 9.97801C12.8712 9.55437 12 10.0326 12 10.8217L12 21.1783C12 21.9674 12.8712 22.4456 13.5369 22.022L21.6742 16.8437C22.2917 16.4507 22.2917 15.5493 21.6742 15.1563L13.5369 9.97801Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIPlayCircleLine;
