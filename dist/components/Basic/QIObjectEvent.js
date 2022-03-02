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
var QIObjectEvent = function (_a) {
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
            d: 'M28 6C28 4.9 27.1 4 26 4H22V2H20V4H12V2H10V4H6C4.89 4 4 4.9 4 6V26C4 27.11 4.89 28 6 28H12V26H6V12H26V14H28V6ZM26 10V6H22V8H20V6H12V8H10V6H6V10H26ZM14 24C14 28.41 17.59 32 22 32C26.41 32 30 28.41 30 24C30 19.59 26.41 16 22 16C17.59 16 14 19.59 14 24ZM16 24C16 20.69 18.69 18 22 18C25.31 18 28 20.69 28 24C28 27.31 25.31 30 22 30C18.69 30 16 27.31 16 24ZM21 24.41L23.59 27L25 25.59L23 23.59V20H21V24.41Z',
            fill: 'black',
          },
          void 0,
        ),
      },
    ),
    void 0,
  );
};
export default QIObjectEvent;
