function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIMail = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 6H4C2.9 6 2 6.89 2 8V24C2 25.1 2.9 26 4 26H28C29.1 26 30 25.1 30 24V8C30 6.9 29.1 6 28 6ZM25.8 8L16 14.78L6.2 8H25.8ZM4 24V8.91L15.43 16.83C15.6 16.94 15.8 17 16 17C16.2 17 16.4 16.94 16.57 16.82L28 8.91V24H4Z",
  fill: "black"
}));

export default QIMail;