function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIDelete = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 2H20V4H12V2ZM4 6V8H6V28C6 29.1 6.90002 30 8 30H24C25.1 30 26 29.1 26 28V8H28V6H4ZM8 8H24V28H8V8ZM12 12H14V24H12V12ZM18 12H20V24H18V12Z",
  fill: "black"
}));

export default QIDelete;