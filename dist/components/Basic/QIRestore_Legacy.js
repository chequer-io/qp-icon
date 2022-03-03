function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIRestore_Legacy = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M28 22V18H30V22C30 23.1 29.1 24 28 24H24V28C24 29.1 23.1 30 22 30H4C2.90002 30 2 29.1 2 28V10C2 8.90002 2.90002 8 4 8H8V4C8 2.90002 8.90002 2 10 2H14V4H10V8H22C23.1 8 24 8.90002 24 10V22H28ZM4 28H22V10H4V28ZM17 2H21V4H17V2ZM30 8H28V4H24V2H28C29.1 2 30 2.90002 30 4V8ZM30 11H28V15H30V11Z",
  fill: "black"
}));

export default QIRestore_Legacy;