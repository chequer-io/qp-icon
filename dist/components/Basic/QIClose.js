function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIClose = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 8.4L23.6 7L16 14.6L8.4 7.00001L7 8.40001L14.6 16L6.99999 23.6L8.39999 25L16 17.4L23.6 25L25 23.6L17.4 16L25 8.4Z",
  fill: "black"
}));

export default QIClose;