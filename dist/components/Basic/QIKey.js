function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIKey = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M21.7071 14C23.9162 14 25.7071 12.2091 25.7071 10C25.7071 7.79086 23.9162 6 21.7071 6C19.498 6 17.7071 7.79086 17.7071 10C17.7071 12.2091 19.498 14 21.7071 14ZM21.7071 16C25.0208 16 27.7071 13.3137 27.7071 10C27.7071 6.68629 25.0208 4 21.7071 4C18.3934 4 15.7071 6.68629 15.7071 10C15.7071 11.5515 16.296 12.9654 17.2624 14.0305L12.2071 19.0858L9.41421 16.2928L8 17.7071L10.7929 20.5L8.20711 23.0857L5.41421 20.2928L4 21.7071L6.79289 24.5L4.70709 26.5857L6.12131 28L18.8461 15.2753C19.6965 15.7374 20.6711 16 21.7071 16Z",
  fill: "black"
}));

export default QIKey;