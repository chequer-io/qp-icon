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
var PlusCircleLine = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M28 16C28 9.39999 22.6 4 16 4C9.40002 4 4 9.39999 4 16C4 22.6 9.40002 28 16 28C22.6 28 28 22.6 28 16ZM2 16C2 8.29999 8.29999 2 16 2C23.7 2 30 8.29999 30 16C30 23.7 23.7 30 16 30C8.29999 30 2 23.7 2 16ZM17 15H24V17H17V24H15V17H8V15H15V8H17V15Z',
          fill: 'black',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default PlusCircleLine;
