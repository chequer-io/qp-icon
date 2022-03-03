function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIObjectView = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 8H24V4C24 3.46957 23.7893 2.96086 23.4142 2.58578C23.0391 2.21071 22.5304 2 22 2H4C3.46957 2 2.96089 2.21071 2.58582 2.58578C2.21074 2.96086 2 3.46957 2 4V22C2 22.5304 2.21074 23.0391 2.58582 23.4142C2.96089 23.7893 3.46957 24 4 24H8V28C8 28.5304 8.21074 29.0391 8.58582 29.4142C8.96089 29.7893 9.46957 30 10 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V10C30 9.46957 29.7893 8.96086 29.4142 8.58578C29.0391 8.21071 28.5304 8 28 8ZM22 22H14V17H22V22ZM22 15H14V10H22V15ZM12 15H4V10H12V15ZM22 4V8H4V4H22ZM4 22V17H12V22H4ZM28 28H10V24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V10H28V28Z",
  fill: "black"
}));

export default QIObjectView;