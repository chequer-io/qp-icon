function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIUndo = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 10H7.81L11.4 6.41L10 5L4 11L10 17L11.4 15.59L7.82001 12H20C21.5913 12 23.1174 12.6321 24.2426 13.7574C25.3678 14.8826 26 16.4087 26 18C26 19.5913 25.3678 21.1174 24.2426 22.2426C23.1174 23.3679 21.5913 24 20 24H12V26H20C22.1217 26 24.1566 25.1572 25.6569 23.6569C27.1572 22.1566 28 20.1217 28 18C28 15.8783 27.1572 13.8434 25.6569 12.3431C24.1566 10.8428 22.1217 10 20 10Z",
  fill: "black"
}));

export default QIUndo;