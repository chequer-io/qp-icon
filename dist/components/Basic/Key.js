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
var Key = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M21.7071 14C23.9162 14 25.7071 12.2091 25.7071 10C25.7071 7.79086 23.9162 6 21.7071 6C19.498 6 17.7071 7.79086 17.7071 10C17.7071 12.2091 19.498 14 21.7071 14ZM21.7071 16C25.0208 16 27.7071 13.3137 27.7071 10C27.7071 6.68629 25.0208 4 21.7071 4C18.3934 4 15.7071 6.68629 15.7071 10C15.7071 11.5515 16.296 12.9654 17.2624 14.0305L12.2071 19.0858L9.41421 16.2928L8 17.7071L10.7929 20.5L8.20711 23.0857L5.41421 20.2928L4 21.7071L6.79289 24.5L4.70709 26.5857L6.12131 28L18.8461 15.2753C19.6965 15.7374 20.6711 16 21.7071 16Z',
          fill: 'black',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default Key;
