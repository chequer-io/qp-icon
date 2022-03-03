function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIObjectTrigger = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.2044 2H22.2466L20.2466 11H24.9999C25.8283 11 26.2975 11.9494 25.7943 12.6074L12.7943 29.6075C12.1653 30.43 10.8541 29.8715 11.0116 28.8479L12.8343 17H7.99994C7.35686 17 6.88095 16.4018 7.02555 15.7751L10.2044 2ZM11.7955 4L9.25699 15H15.1656L13.5836 25.2829L22.9764 13H17.7533L19.7533 4H11.7955Z",
  fill: "black"
}));

export default QIObjectTrigger;