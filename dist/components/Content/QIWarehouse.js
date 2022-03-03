function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIWarehouse = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4 8H8V4H4V8ZM10 10H2V2H10V10ZM14 11H18V7H14V11ZM20 13H12V5H20V13ZM8 20H4V16H8V20ZM2 22H10V30H30V10H22V16H16V22H10V14H2V22ZM12 24V28H16V24H12ZM18 24V28H22V24H18ZM22 18H18V22H22V18ZM24 28H28V24H24V28ZM24 22H28V18H24V22ZM28 12H24V16H28V12Z",
  fill: "black"
}));

export default QIWarehouse;