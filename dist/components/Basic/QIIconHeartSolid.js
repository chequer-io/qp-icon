function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIIconHeartSolid = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.1104 6.24C18.5809 4.75 20.5435 4 22.474 4C24.4046 4 26.4816 5.01 27.952 6.5C30.9029 9.48 30.4532 15 27.9521 18C25.4509 21 16 29 16 29C16 29 6.54932 21 4.04803 18C1.54674 15 1.09715 9.48 4.048 6.5C5.51842 5.01 7.59549 4 9.52604 4C11.4666 4 13.4194 4.75 14.8898 6.24L16 7.5L17.1104 6.24Z",
  fill: "black"
}));

export default QIIconHeartSolid;