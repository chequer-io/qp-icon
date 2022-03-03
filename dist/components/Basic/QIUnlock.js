function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIUnlock = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 14H12V8C12 5.79 13.79 4 16 4C18.21 4 20 5.79 20 8H22C22 4.69 19.31 2 16 2C12.69 2 10 4.69 10 8V14H8C6.9 14 6 14.89 6 16V28C6 29.11 6.9 30 8 30H24C25.1 30 26 29.11 26 28V16C26 14.89 25.1 14 24 14ZM24 28H8V16H24V28Z",
  fill: "black"
}));

export default QIUnlock;