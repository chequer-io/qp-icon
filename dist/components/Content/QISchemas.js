function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QISchemas = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.5 6L2 12.5L8.5 19L15 12.5L8.5 6ZM8.5 17.5858L3.41422 12.5L8.5 7.41418L13.5858 12.5L8.5 17.5858ZM8.5 9L5 12.5L8.5 16L12 12.5L8.5 9ZM23.5 6L17 12.5L23.5 19L30 12.5L23.5 6ZM23.5 17.5858L18.4142 12.5L23.5 7.41418L28.5858 12.5L23.5 17.5858ZM23.5 9L20 12.5L23.5 16L27 12.5L23.5 9ZM9.5 20L16 13.5L22.5 20L16 26.5L9.5 20ZM10.9142 20L16 25.0858L21.0858 20L16 14.9142L10.9142 20ZM12.5 20L16 16.5L19.5 20L16 23.5L12.5 20Z",
  fill: "black"
}));

export default QISchemas;