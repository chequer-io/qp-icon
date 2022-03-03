function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIPanelViewStack = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 15L6 6L26 6L26 15L6 15ZM6 17L6 26L26 26L26 17L6 17ZM6 28C4.89543 28 4 27.1046 4 26L4 6C4 4.89543 4.89543 4 6 4L26 4C27.1046 4 28 4.89543 28 6L28 26C28 27.1046 27.1046 28 26 28L6 28Z",
  fill: "black"
}));

export default QIPanelViewStack;