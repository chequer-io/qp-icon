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
var Connect = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.7425 6.25502C23.0824 3.91499 26.9025 3.91499 29.2425 6.25502C31.5924 8.59499 31.5924 12.415 29.2425 14.755L21.2625 22.735C20.0924 23.905 18.5325 24.495 16.9925 24.495C15.4524 24.495 13.9325 23.905 12.7625 22.735C10.4125 20.395 10.4125 16.575 12.7625 14.235L14.1825 12.815L15.6024 14.235L14.1825 15.655C12.6225 17.215 12.6225 19.765 14.1825 21.325C15.7425 22.885 18.2925 22.885 19.8524 21.325L27.8324 13.345C29.3925 11.785 29.3925 9.235 27.8324 7.675C26.2725 6.11501 23.7224 6.11501 22.1625 7.675L20.7425 6.25502ZM4.18253 18.645C2.62247 20.205 2.62247 22.755 4.18253 24.315C5.74246 25.885 8.29251 25.885 9.85245 24.315L11.2725 25.735C10.1024 26.905 8.5325 27.495 6.99246 27.495C5.45242 27.495 3.93253 26.905 2.76248 25.735C0.412506 23.385 0.412506 19.575 2.76248 17.225L10.7325 9.25502C11.8725 8.12502 13.3825 7.49501 14.9925 7.49501C16.6024 7.49501 18.1024 8.12502 19.2425 9.25502C21.5924 11.605 21.5924 15.415 19.2425 17.765L17.1225 19.885L15.7024 18.465L17.8224 16.345C18.5824 15.595 18.9925 14.565 18.9925 13.495C18.9925 12.425 18.5824 11.435 17.8224 10.675C16.2625 9.11501 13.7124 9.11501 12.1525 10.675L4.18253 18.645Z',
          fill: 'black',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default Connect;
