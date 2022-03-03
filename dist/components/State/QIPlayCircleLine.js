function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIPlayCircleLine = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM14 12.6433L14 19.3567L19.2747 16L14 12.6433ZM13.5369 9.97801C12.8712 9.55437 12 10.0326 12 10.8217L12 21.1783C12 21.9674 12.8712 22.4456 13.5369 22.022L21.6742 16.8437C22.2917 16.4507 22.2917 15.5493 21.6742 15.1563L13.5369 9.97801Z",
  fill: "black"
}));

export default QIPlayCircleLine;