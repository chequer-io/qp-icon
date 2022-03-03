function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIAddFile = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 8H28C29.1 8 30 8.90002 30 10V18H28V10H15.2L14.6 9.40002L11.2 6H4V26H18V28H4C2.90002 28 2 27.1 2 26V6C2 4.90002 2.90002 4 4 4H11.2C11.7 4 12.2 4.19995 12.6 4.59998L16 8ZM24 20H26V24H30V26H26V30H24V26H20V24H24V20Z",
  fill: "black"
}));

export default QIAddFile;