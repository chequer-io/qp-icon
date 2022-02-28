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
var Keyboard = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 25C29.1 25 30 24.1 30 23V9C30 7.90002 29.1 7 28 7H4C2.90002 7 2 7.90002 2 9V23C2 24.1 2.90002 25 4 25H28ZM4 23V9H28V23H4ZM10 19H21V21H10V19ZM8 11H6V13H8V11ZM10 11H12V13H10V11ZM16 11H14V13H16V11ZM18 11H20V13H18V11ZM8 19H6V21H8V19ZM6 15H8V17H6V15ZM12 15H10V17H12V15ZM14 15H16V17H14V15ZM26 11H22V13H26V11ZM22 15H26V17H22V15ZM20 15H18V17H20V15ZM23 19H26V21H23V19Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default Keyboard;
