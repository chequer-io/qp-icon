function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIFormatting = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M28 4H4V6H28V4ZM4 9L12 16L4 23V9ZM28 26H4V28H28V26ZM14 20.5H28V22.5H14V20.5ZM28 15H14V17H28V15ZM14 9.5H28V11.5H14V9.5Z",
  fill: "black"
}));

export default QIFormatting;