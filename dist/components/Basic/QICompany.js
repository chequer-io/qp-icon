function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QICompany = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24 28V4H8V28H24ZM24 2C25.1 2 26 2.90002 26 4V30H6V4C6 2.90002 6.89999 2 8 2H24ZM14 8H12V12H14V8ZM14 14H12V18H14V14ZM18 8H20V12H18V8ZM20 14H18V18H20V14ZM12 20H14V24H12V20ZM20 20H18V24H20V20Z",
  fill: "black"
}));

export default QICompany;