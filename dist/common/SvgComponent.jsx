var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
export var sizeMap = {
  S: 16,
  M: 20,
  L: 24,
  XL: 32,
  small: 16,
  medium: 20,
  large: 24,
  extraLarge: 32,
  responsive: '1em',
};
var SvgComponent = function (_a) {
  var _b = _a.size,
    size = _b === void 0 ? 'responsive' : _b,
    _c = _a.style,
    style = _c === void 0 ? {} : _c,
    viewBox = _a.viewBox,
    children = _a.children,
    rest = __rest(_a, ['size', 'style', 'viewBox', 'children']);
  var iconSize = sizeMap[size];
  return (
    <svg
      viewBox={viewBox}
      style={style}
      width={iconSize}
      height={iconSize}
      {...rest}
    >
      {children}
    </svg>
  );
};
export default SvgComponent;