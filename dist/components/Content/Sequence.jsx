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
var Sequence = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12V20H10V22H4V20H6V15H4V13H6V12H8ZM22 12H26C26.5304 12 27.0391 12.2107 27.4142 12.5858C27.7893 12.9609 28 13.4696 28 14V20C28 20.5304 27.7893 21.0391 27.4142 21.4142C27.0391 21.7893 26.5304 22 26 22H22V20H26V18H23V16H26V14H22V12ZM13 20H15V22H13V20ZM19 20H17V22H19V20Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default Sequence;
