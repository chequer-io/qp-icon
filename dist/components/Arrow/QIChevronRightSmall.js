function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIChevronRightSmall = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.41 16L13.41 23L12 21.59L17.58 16L12 10.41L13.41 9L20.41 16Z",
  fill: "black"
}));

export default QIChevronRightSmall;