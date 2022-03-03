function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIUser = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M21 9C21 6.23999 18.76 4 16 4C13.24 4 11 6.23999 11 9C11 11.76 13.24 14 16 14C18.76 14 21 11.76 21 9ZM9 9C9 5.13 12.13 2 16 2C19.87 2 23 5.13 23 9C23 12.87 19.87 16 16 16C12.13 16 9 12.87 9 9ZM24 30H26V23C25.99 19.14 20.86 18.01 17 18H15C11.14 18.01 6 19.14 6 23V30H8V23C8 20.24 12.24 20 15 20H17C19.76 20 24 20.24 24 23V30Z",
  fill: "black"
}));

export default QIUser;