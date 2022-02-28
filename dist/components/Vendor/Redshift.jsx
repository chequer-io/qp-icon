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
var Redshift = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        d="M16.1985 22.3503L25.3251 24.5233V7.42841L16.1985 9.60143V22.3503Z"
        fill="#205B97"
      />
      <path
        d="M25.3248 7.42841L27.0632 8.29762V23.6541L25.3248 24.5233V7.42841ZM16.1982 22.3503L7.07153 24.5233V7.42841L16.1982 9.60143V22.3503Z"
        fill="#5193CE"
      />
      <path
        d="M7.07166 7.42841L5.33325 8.29762V23.6541L7.07166 24.5233V7.42841Z"
        fill="#205B97"
      />
      <path
        d="M18.5171 28L21.994 26.2616V5.73841L18.5171 4L17.4541 15.3965L18.5171 28Z"
        fill="#5193CE"
      />
      <path
        d="M13.8804 28L10.4036 26.2616V5.73841L13.8804 4L14.9433 15.3965L13.8804 28Z"
        fill="#205B97"
      />
      <path d="M13.8799 4H18.5636V27.9516H13.8799V4Z" fill="#2E73B7" />
    </SvgComponent>
  );
};
export default Redshift;