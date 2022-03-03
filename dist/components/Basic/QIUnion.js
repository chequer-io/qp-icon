function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIUnion = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3 22L5.90726 18.7783C6.12002 18.557 6.25 18.2496 6.25 17.9176V12.9C6.25 7.4784 10.7882 3 16 3C21.2118 3 25.75 7.4784 25.75 12.9V17.9176C25.75 18.2496 25.8682 18.557 26.0927 18.7906L29 22V24H21C21 26.7614 18.7614 29 16 29C13.2386 29 11 26.7614 11 24H5H3V22ZM13 24C13 25.6569 14.3431 27 16 27C17.6569 27 19 25.6569 19 24H13ZM24.6543 20.1802L26.4124 22H5.58297L7.3485 20.165L7.34923 20.1642C7.91649 19.574 8.25 18.7714 8.25 17.9176V12.9C8.25 8.57108 11.9046 5 16 5C20.0954 5 23.75 8.57108 23.75 12.9V17.9176C23.75 18.7358 24.0476 19.5488 24.6507 20.1764L24.6543 20.1802Z",
  fill: "black"
}));

export default QIUnion;