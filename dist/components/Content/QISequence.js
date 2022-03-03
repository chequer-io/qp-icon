function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QISequence = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 9V21H10V23H4V21H6V12H4V10H6V9H8ZM22 9H26C26.5304 9 27.0391 9.21074 27.4142 9.58582C27.7893 9.96089 28 10.4696 28 11V21C28 21.5304 27.7893 22.0391 27.4142 22.4142C27.0391 22.7893 26.5304 23 26 23H22V21H26V17H23V15H26V11H22V9ZM13 21H15V23H13V21ZM19 21H17V23H19V21Z",
  fill: "black"
}));

export default QISequence;