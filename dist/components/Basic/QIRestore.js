function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIRestore = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 8H5.83L9.42 4.41L8 3L2 9L8 15L9.41 13.59L5.83 10H26V26H6V19H4V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V10C28 8.9 27.1 8 26 8Z",
  fill: "black"
}));

export default QIRestore;