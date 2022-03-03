function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIExport = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.41003 13.41L6 12L16 2L26 12L24.59 13.41L17 5.82996V24H15V5.82996L7.41003 13.41ZM26 28V24H28V28C28 29.11 27.1 30 26 30H6C4.90002 30 4.01001 29.1 4.01001 28H4V24H6V28H26Z",
  fill: "black"
}));

export default QIExport;