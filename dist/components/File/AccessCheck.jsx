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
var AccessCheck = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 28H13V30H6C4.90002 30 4 29.1 4 28V4C4 2.90002 4.90002 2 6 2H16C16.3 2 16.5 2.09998 16.7 2.30005L23.7 9.30005C23.9 9.5 24 9.69995 24 10V18H22V12H16C14.9 12 14 11.1 14 10V4H6V28ZM21.6 10L16 4.40002V10H21.6ZM17.41 24.59L20 27.1801L26.59 20.59L28 22L20 30L16 26L17.41 24.59Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default AccessCheck;
