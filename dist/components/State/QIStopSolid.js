function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIStopSolid = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2 16C2 8.27 8.27 2 16 2C23.73 2 30 8.27 30 16C30 23.73 23.73 30 16 30C8.27 30 2 23.73 2 16ZM20 22C21.1 22 22 21.11 22 20V12C22 10.9 21.1 10 20 10H12C10.9 10 10 10.9 10 12V20C10 21.11 10.9 22 12 22H20ZM20 12H12V20H20V12Z",
  fill: "black"
}));

export default QIStopSolid;