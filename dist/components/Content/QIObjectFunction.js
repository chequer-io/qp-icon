function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIObjectFunction = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13.9132 4C12.8788 4 12.0151 4.78877 11.9214 5.81893L11.2686 13H7V15H11.0868L10.0868 26H5V28H10.0868C11.1212 28 11.9849 27.2112 12.0786 26.1811L13.095 15H18V13H13.2769L13.9132 6H19V4H13.9132ZM24 17H26L23 22.5L26 28H24L22 24.3333L20 28H18L21 22.5L18 17H20L22 20.6667L24 17Z",
  fill: "black"
}));

export default QIObjectFunction;