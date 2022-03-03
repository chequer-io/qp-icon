function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import SvgComponent from "../../common/SvgComponent";

const QIStar = ({ ...props
}) => /*#__PURE__*/React.createElement(SvgComponent, _extends({
  viewBox: "0 0 32 32",
  className: "querypie_icon",
  "data-qi-has-multi-path": "false"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12.6436 12.6026L5.08444 13.7158L10.5571 19.1111L9.26913 26.6994L16 23.1215L22.7309 26.6994L21.4429 19.1111L26.9156 13.7158L19.3564 12.6026L16 5.71973L12.6436 12.6026ZM15.0586 3.08728C15.4404 2.30424 16.5596 2.30424 16.9414 3.08728L20.6916 10.7777L29.1051 12.0167C29.9588 12.1424 30.3017 13.186 29.6882 13.7909L23.5891 19.8038L25.0278 28.2801C25.1728 29.1346 24.2702 29.7827 23.5031 29.3749L16 25.3865L8.49687 29.3749C7.72976 29.7827 6.8272 29.1346 6.97223 28.2801L8.41094 19.8038L2.31184 13.7909C1.69826 13.186 2.04123 12.1424 2.89492 12.0167L11.3084 10.7777L15.0586 3.08728Z",
  fill: "black"
}));

export default QIStar;