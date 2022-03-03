function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIDisconnect = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13 2H11V6H13V2ZM3.58856 5.00354L5.00256 3.58911L8.41833 7.00391L7.00433 8.41833L3.58856 5.00354ZM23.582 24.9956L24.9963 23.5815L28.4112 26.9973L26.9968 28.4114L23.582 24.9956ZM2 11H6V13H2V11ZM30 19H26V21H30V19ZM19 26H21V30H19V26ZM16.59 21.0699L12.87 24.79C11.28 26.38 8.71997 26.4 7.15997 24.84C5.59998 23.28 5.62 20.72 7.21002 19.13L10.93 15.41L9.51001 14L5.79999 17.72C3.42999 20.09 3.40997 23.92 5.75 26.26C6.90002 27.42 8.42999 28 9.96002 28C11.52 28 13.09 27.4 14.28 26.21L18 22.49L16.59 21.0699ZM19.13 7.20996L15.41 10.9301L14 9.52002L17.72 5.79004C18.91 4.59998 20.48 4 22.04 4C23.57 4 25.1 4.57996 26.26 5.73999C28.6 8.07996 28.58 11.91 26.21 14.28L22.49 18L21.07 16.59L24.79 12.87C26.38 11.28 26.4 8.71997 24.84 7.16003C23.28 5.59998 20.72 5.62 19.13 7.20996Z",
  fill: "black"
}));

export default QIDisconnect;