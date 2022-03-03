function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIOpenWeb = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M20 4V2H30V12H28V5.40997L19.41 14L18 12.59L26.59 4H20ZM4 26C4 27.1 4.90002 28 6 28H26C27.1 28 28 27.1 28 26V16H26V26H6V6H16V4H6C4.90002 4 4 4.90002 4 6V26Z",
  fill: "black"
}));

export default QIOpenWeb;