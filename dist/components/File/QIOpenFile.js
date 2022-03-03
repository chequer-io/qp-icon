function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIOpenFile = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.17 6L14.58 9.41L15.17 10H16H24V14H7.5086C6.61564 14 5.83087 14.592 5.58555 15.4506L4 21V10V8V6H11.17ZM4.65146 26H24.1429L28 16H7.5086L4.65146 26ZM4 28C2.9 28 2 27.11 2 26V6C2 4.9 2.9 4 4 4H11.17C11.7 4 12.21 4.21 12.59 4.59L16 8H24C25.11 8 26 8.9 26 10V14H28C29.3288 14 30.2881 15.2718 29.923 16.5494L26.0659 26.5494C25.8206 27.408 25.0358 28 24.1429 28H4Z",
  fill: "black"
}));

export default QIOpenFile;