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
var Save = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.17 6L26 11.83V26H22V18C22 16.9 21.1 16 20 16H12C10.9 16 10 16.9 10 18V26H6V6H10V10C10 11.1 10.9 12 12 12H21V10H12V6H20.17ZM12 26H20V18H12V26ZM21 4H6C4.90002 4 4 4.89999 4 6V26C4 27.1 4.90002 28 6 28H26C27.1 28 28 27.1 28 26V11L21 4Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default Save;
