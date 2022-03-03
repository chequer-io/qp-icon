function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIPin = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28.59 13.31L30 11.9L20 2L18.69 3.42L19.88 4.61L8.38 14.32L6.66 12.6L5.25 14L10.91 19.68L2 28.58L3.41 30L12.32 21.09L18 26.75L19.39 25.34L17.67 23.62L27.39 12.13L28.59 13.31ZM16.26 22.2L9.8 15.74L21.29 6L26 10.71L16.26 22.2Z",
  fill: "black"
}));

export default QIPin;