function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QICheckBox = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 4H6C4.9 4 4 4.89 4 6V26C4 27.11 4.9 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.89 27.1 4 26 4ZM6 6H26V26H6V6Z",
  fill: "black"
}));

export default QICheckBox;