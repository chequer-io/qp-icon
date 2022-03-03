function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIPlusCircle = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 2C8.4 2 2 8.4 2 16C2 23.6 8.4 30 16 30C23.6 30 30 23.6 30 16C30 8.4 23.6 2 16 2ZM24 17H17V24H15V17H8V15H15V8H17V15H24V17Z",
  fill: "black"
}));

export default QIPlusCircle;