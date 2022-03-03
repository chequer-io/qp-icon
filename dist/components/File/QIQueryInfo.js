function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIQueryInfo = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2 2H18V4H2V2ZM2 7H18V9H2V7ZM10 12H2V14H10V12ZM25.31 23.9L29.9999 28.59L28.58 30L23.9 25.3101C22.4994 26.4015 20.7756 26.9961 18.9999 27C16.8782 27 14.8435 26.1571 13.3432 24.6569C11.8429 23.1566 10.9999 21.1217 10.9999 19C10.9999 16.8783 11.8429 14.8434 13.3432 13.3431C14.8435 11.8429 16.8782 11 18.9999 11C21.1217 11 23.1565 11.8429 24.6568 13.3431C26.1571 14.8434 26.9999 16.8783 26.9999 19C26.996 20.7756 26.4015 22.4995 25.31 23.9ZM14.7574 23.2427C15.8826 24.3679 17.4086 25 18.9999 25C20.5912 25 22.1174 24.3679 23.2426 23.2427C24.3678 22.1174 24.9999 20.5913 24.9999 19C24.9999 17.4087 24.3678 15.8826 23.2426 14.7573C22.1174 13.6321 20.5912 13 18.9999 13C17.4086 13 15.8826 13.6321 14.7574 14.7573C13.6322 15.8826 12.9999 17.4087 12.9999 19C12.9999 20.5913 13.6322 22.1174 14.7574 23.2427Z",
  fill: "black"
}));

export default QIQueryInfo;