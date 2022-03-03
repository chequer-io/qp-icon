function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export const sizeMap = {
  S: 16,
  M: 20,
  L: 24,
  XL: 32,
  small: 16,
  medium: 20,
  large: 24,
  extraLarge: 32,
  responsive: '1em'
};

const SvgComponent = ({
  size = 'responsive',
  style = {},
  viewBox,
  children,
  ...rest
}) => {
  const iconSize = sizeMap[size];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: viewBox,
    style: style,
    width: iconSize,
    height: iconSize
  }, rest), children);
};

export default SvgComponent;