function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIImport = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24.59 12.59L26 14L16 24L6 14L7.41 12.59L15 20.17V2H17V20.17L24.59 12.59ZM26 28V24H28V28C28 29.11 27.1 30 26 30H6C4.89 30 4 29.11 4 28V24H6V28H26Z",
  fill: "black"
}));

export default QIImport;