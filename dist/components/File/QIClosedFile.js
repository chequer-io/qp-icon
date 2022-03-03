function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIClosedFile = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.17 6L14.58 9.41L15.17 10H16H28V26H4V10V8V6H11.17ZM11.17 4H4C2.9 4 2 4.9 2 6V26C2 27.11 2.9 28 4 28H28C29.11 28 30 27.11 30 26V10C30 8.9 29.11 8 28 8H16L12.59 4.59C12.21 4.21 11.7 4 11.17 4Z",
  fill: "black"
}));

export default QIClosedFile;