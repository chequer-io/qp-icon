function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIResult = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M22 5H25C26.1 5 27 5.90002 27 7V28C27 29.1101 26.1 30 25 30H7C5.89001 30 5 29.1101 5 28V7C5 5.90002 5.89001 5 7 5H10V4C10 2.90002 10.89 2 12 2H20C21.1 2 22 2.90002 22 4V5ZM20 4H12V8H20V4ZM7 28H25V7H22V10H10V7H7V28ZM14 13H22V15H14V13ZM14 18H22V20H14V18ZM12 23H10V25H12V23ZM22 23H14V25H22V23ZM12 18H10V20H12V18ZM12 13H10V15H12V13Z",
  fill: "black"
}));

export default QIResult;