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
var Security = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M13 4C13 4 10.0542 6.08655 8.45453 6.76924C6.93713 7.41682 3 8.00001 3 8.00001L3.00002 15C3.00002 21.1066 7.26665 26.6136 13 28C13.6895 27.8333 14.3578 27.607 15 27.3272V25.1036C14.3651 25.4469 13.6958 25.7256 13 25.9301C8.43003 24.5865 5.00002 20.0458 5.00002 15L5 9.69214C5.17257 9.66061 5.35268 9.62687 5.53752 9.59117C6.68087 9.37034 8.25356 9.02952 9.23957 8.60873C10.2174 8.19144 11.4859 7.40909 12.415 6.80688C12.6213 6.67313 12.8181 6.54353 13 6.42236C13.1819 6.54353 13.3787 6.67313 13.585 6.80688C14.5141 7.40909 15.7826 8.19144 16.7604 8.60873C17.7464 9.02953 19.3191 9.37034 20.4625 9.59117C20.6473 9.62687 20.8274 9.66061 21 9.69215V13H23V8.00001C23 8.00001 19.0628 7.41682 17.5454 6.76924C15.9458 6.08655 13 4 13 4ZM27 21V19C27 16.79 25.21 15 23 15C20.79 15 19 16.79 19 19V21C17.9 21 17 21.9 17 23V28C17 29.1 17.9 30 19 30H27C28.1 30 29 29.1 29 28V23C29 21.9 28.1 21 27 21ZM21 19C21 17.9 21.9 17 23 17C24.1 17 25 17.9 25 19V21H21V19ZM27 23V28H19V23H27Z',
          fill: 'black',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default Security;
