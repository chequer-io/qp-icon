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
var Export = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41003 13.41L6 12L16 2L26 12L24.59 13.41L17 5.82996V24H15V5.82996L7.41003 13.41ZM26 28V24H28V28C28 29.11 27.1 30 26 30H6C4.90002 30 4.01001 29.1 4.01001 28H4V24H6V28H26Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default Export;
