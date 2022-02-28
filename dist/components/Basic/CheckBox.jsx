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
var CheckBox = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        d="M26 4H6C4.9 4 4 4.89 4 6V26C4 27.11 4.9 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.89 27.1 4 26 4ZM6 6H26V26H6V6Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default CheckBox;
