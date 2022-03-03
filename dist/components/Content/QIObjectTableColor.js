function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIObjectTableColor = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 3H5C4.46957 3 3.96089 3.21071 3.58582 3.58578C3.21074 3.96086 3 4.46957 3 5V27C3 27.5304 3.21074 28.0391 3.58582 28.4142C3.96089 28.7893 4.46957 29 5 29H27C27.5304 29 28.0391 28.7893 28.4142 28.4142C28.7893 28.0391 29 27.5304 29 27V5C29 4.46957 28.7893 3.96086 28.4142 3.58578C28.0391 3.21071 27.5304 3 27 3ZM27 5V11H5V5H27ZM17 13H27V19H17V13ZM15 19H5V13H15V19ZM5 21H15V27H5V21ZM17 27V21H27V27H17Z",
  fill: "#01519D"
}));

export default QIObjectTableColor;