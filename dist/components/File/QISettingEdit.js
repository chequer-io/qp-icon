function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QISettingEdit = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 28H14V30H6C4.90002 30 4 29.1 4 28V4C4 2.90002 4.90002 2 6 2H16C16.3 2 16.5 2.09998 16.7 2.30005L23.7 9.30005C23.9 9.5 24 9.69995 24 10V14H22V12H16C14.9 12 14 11.1 14 10V4H6V28ZM21.6 10L16 4.40002V10H21.6ZM25.9 22H28V24V24.01H25.88C25.75 24.64 25.5 25.24 25.15 25.76L26.64 27.25L25.23 28.66L23.74 27.17C23.22 27.52 22.63 27.77 21.99 27.9V30H19.99V27.88C19.36 27.75 18.76 27.5 18.24 27.15L16.75 28.64L15.34 27.23L16.83 25.74C16.48 25.22 16.23 24.63 16.1 23.99H14V21.99H16.12C16.25 21.36 16.5 20.76 16.85 20.24L15.36 18.75L16.77 17.34L18.26 18.83C18.78 18.48 19.37 18.23 20.01 18.1V16H22.01V18.11C22.64 18.24 23.24 18.49 23.76 18.84L25.25 17.35L26.66 18.76L25.17 20.25C25.52 20.77 25.77 21.36 25.9 22ZM18 23C18 24.65 19.35 26 21 26C22.65 26 24 24.65 24 23C24 21.35 22.65 20 21 20C19.35 20 18 21.35 18 23Z",
  fill: "black"
}));

export default QISettingEdit;