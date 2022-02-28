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
import SvgComponent from '../../common/SvgComponent';
var PanelViewStack = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15L6 6L26 6L26 15L6 15ZM6 17L6 26L26 26L26 17L6 17ZM6 28C4.89543 28 4 27.1046 4 26L4 6C4 4.89543 4.89543 4 6 4L26 4C27.1046 4 28 4.89543 28 6L28 26C28 27.1046 27.1046 28 26 28L6 28Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default PanelViewStack;
