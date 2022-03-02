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
var QIMore = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign(
      {
        viewBox: '0 0 32 32',
        className: 'querypie_icon',
        'data-qi-has-multi-path': 'false',
      },
      props,
      {
        children: _jsx(
          'path',
          {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M16 6C17.1 6 18 6.90002 18 8C18 9.10999 17.1 10 16 10C14.89 10 14 9.10999 14 8C14 6.90002 14.89 6 16 6ZM16 14C17.1 14 18 14.9 18 16C18 17.11 17.1 18 16 18C14.89 18 14 17.11 14 16C14 14.9 14.89 14 16 14ZM18 24C18 22.9 17.1 22 16 22C14.89 22 14 22.9 14 24C14 25.11 14.89 26 16 26C17.1 26 18 25.11 18 24Z',
            fill: 'black',
          },
          void 0,
        ),
      },
    ),
    void 0,
  );
};
export default QIMore;
