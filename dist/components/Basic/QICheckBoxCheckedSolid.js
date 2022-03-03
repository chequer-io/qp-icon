function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QICheckBoxCheckedSolid = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 4H6C4.9 4 4 4.9 4 6V26C4 27.11 4.9 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.9 27.1 4 26 4ZM14 21.5L9 16.54L10.59 15L14 18.35L21.41 11L23 12.58L14 21.5Z",
  fill: "black"
}));

export default QICheckBoxCheckedSolid;