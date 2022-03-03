function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIExclude = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 28H10V26H6V6H10V4H6C5.46957 4 4.96089 4.21074 4.58582 4.58582C4.21074 4.96089 4 5.46957 4 6V26C4 26.5304 4.21074 27.0391 4.58582 27.4142C4.96089 27.7893 5.46957 28 6 28ZM22 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96089 27.4142 4.58582C27.0391 4.21074 26.5304 4 26 4H22V6H26V26H22V28ZM20 10.5H18L16 14.1667L14 10.5H12L15 16L12 21.5H14L16 17.8333L18 21.5H20L17 16L20 10.5Z",
  fill: "black"
}));

export default QIExclude;