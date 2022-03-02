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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import SvgComponent from '../../common/SvgComponent';
var QIAzureCloud = function (_a) {
  var props = __rest(_a, []);
  return _jsxs(
    SvgComponent,
    __assign(
      {
        viewBox: '0 0 32 32',
        className: 'querypie_icon',
        'data-qi-has-multi-path': 'true',
      },
      props,
      {
        children: [
          _jsx(
            'path',
            {
              d: 'M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z',
              fill: '#0072C6',
            },
            void 0,
          ),
          _jsx(
            'path',
            {
              d: 'M17.1126 6L10.0374 12.1354L4 22.9728H9.44416L17.1126 6ZM18.0534 7.4352L15.0342 15.9456L20.824 23.2195L9.592 25.1491H28L18.0534 7.4352Z',
              fill: 'white',
            },
            void 0,
          ),
        ],
      },
    ),
    void 0,
  );
};
export default QIAzureCloud;
