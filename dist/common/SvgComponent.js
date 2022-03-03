import { jsx as _jsx } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsx("svg", {
    viewBox: viewBox,
    style: style,
    width: iconSize,
    height: iconSize,
    ...rest,
    children: children
  });
};

export default SvgComponent;