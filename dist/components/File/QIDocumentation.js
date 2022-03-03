function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIDocumentation = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24 6H11V26H24C25.1046 26 26 25.1046 26 24V8C26 6.89543 25.1046 6 24 6ZM11 4H9H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H9H11H24C26.2091 28 28 26.2091 28 24V8C28 5.79086 26.2091 4 24 4H11ZM6 26H9V6H6L6 26ZM22 10H15V12H22V10Z",
  fill: "black"
}));

export default QIDocumentation;