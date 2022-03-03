function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QICopy = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2 18H4V4H18V2H4C2.90002 2 2 2.90002 2 4V18ZM10 28H28V10H10V28ZM10 8H28C29.1 8 30 8.90002 30 10V28C30 29.11 29.1 30 28 30H10C8.89001 30 8 29.11 8 28V10C8 8.90002 8.89001 8 10 8Z",
  fill: "black"
}));

export default QICopy;