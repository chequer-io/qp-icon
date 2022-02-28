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
var Redo = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        d="M12 10H24.19L20.6 6.41L22 5L28 11L22 17L20.6 15.59L24.18 12H12C10.4087 12 8.8826 12.6321 7.75739 13.7574C6.63217 14.8826 6 16.4087 6 18C6 19.5913 6.63217 21.1174 7.75739 22.2426C8.8826 23.3679 10.4087 24 12 24H20V26H12C9.87827 26 7.84343 25.1572 6.34314 23.6569C4.84285 22.1566 4 20.1217 4 18C4 15.8783 4.84285 13.8434 6.34314 12.3431C7.84343 10.8428 9.87827 10 12 10Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default Redo;
