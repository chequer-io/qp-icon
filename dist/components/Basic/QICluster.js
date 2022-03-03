function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QICluster = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 30L30 30L30 22L27 22L27 17C27 15.9 26.1 15 25 15L17 15L17 10L20 10L20 2L12 2L12 10L15 10L15 15L7 15C5.9 15 5 15.9 5 17L5 22L2 22L2 30L10 30L10 22L7 22L7 17L15 17L15 22L12 22L12 30L20 30L20 22L17 22L17 17L25 17L25 22L22 22L22 30ZM14 8L14 4L18 4L18 8L14 8ZM8 24L8 28L4 28L4 24L8 24ZM18 24L18 28L14 28L14 24L18 24ZM28 24L28 28L24 28L24 24L28 24Z",
  fill: "black"
}));

export default QICluster;