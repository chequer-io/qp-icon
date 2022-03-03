function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIAzureCloud = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "true"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z",
  fill: "#0072C6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.1126 6L10.0374 12.1354L4 22.9728H9.44416L17.1126 6ZM18.0534 7.4352L15.0342 15.9456L20.824 23.2195L9.592 25.1491H28L18.0534 7.4352Z",
  fill: "white"
}));

export default QIAzureCloud;