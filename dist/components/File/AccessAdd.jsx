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
var AccessAdd = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 28H14V30H6C4.90002 30 4 29.1 4 28V4C4 2.90002 4.90002 2 6 2H16C16.3 2 16.5 2.09998 16.7 2.30005L23.7 9.30005C23.9 9.5 24 9.69995 24 10V16H22V12H16C14.9 12 14 11.1 14 10V4H6V28ZM21.6 10L16 4.40002V10H21.6ZM24 24H28V26H24V30H22V26H18V24H22V20H24V24Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default AccessAdd;