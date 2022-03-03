function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIMore = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 6C17.1 6 18 6.90002 18 8C18 9.10999 17.1 10 16 10C14.89 10 14 9.10999 14 8C14 6.90002 14.89 6 16 6ZM16 14C17.1 14 18 14.9 18 16C18 17.11 17.1 18 16 18C14.89 18 14 17.11 14 16C14 14.9 14.89 14 16 14ZM18 24C18 22.9 17.1 22 16 22C14.89 22 14 22.9 14 24C14 25.11 14.89 26 16 26C17.1 26 18 25.11 18 24Z",
  fill: "black"
}));

export default QIMore;