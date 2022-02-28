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
var Azure = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        d="M17.2363 5.33334L9.37502 12.1504L2.66675 24.192H8.71581L17.2363 5.33334ZM18.2817 6.92801L14.927 16.384L21.3601 24.4661L8.88008 26.6101H29.3334L18.2817 6.92801Z"
        fill="#0072C6"
      />
    </SvgComponent>
  );
};
export default Azure;
