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
var AddFile = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7H28C29.1 7 30 7.90002 30 9V17H28V9H15.2L14.6 8.40002L11.2 5H4V25H18V27H4C2.90002 27 2 26.1 2 25V5C2 3.90002 2.90002 3 4 3H11.2C11.7 3 12.2 3.19995 12.6 3.59998L16 7ZM24 19H26V23H30V25H26V29H24V25H20V23H24V19Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default AddFile;
