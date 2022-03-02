var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
import { jsx as _jsx } from 'react/jsx-runtime';
import SvgComponent from '../../common/SvgComponent';
var Edit = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M21.8 3.59995L25.4 7.19992C26.2 7.99997 26.2 9.19992 25.4 9.99997L10.4 25H4V18.5999L19 3.59995C19.8 2.80002 21 2.80002 21.8 3.59995ZM24 8.59995L20.4 4.99997L17.4 7.99997L21 11.5999L24 8.59995ZM6 19.4V23H9.59998L19.6 13L16 9.39999L6 19.4ZM2 29V27H30V29H2Z',
          fill: 'black',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default Edit;
