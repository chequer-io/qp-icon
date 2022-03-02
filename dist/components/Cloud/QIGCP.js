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
var QIGCP = function (_a) {
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
              fill: '#4285F4',
            },
            void 0,
          ),
          _jsx(
            'path',
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M19.3037 11.9905H19.2439C17.1012 10.2545 13.9775 10.4921 12.1215 12.5323C12.1035 12.5286 12.0826 12.5351 12.0605 12.5484C13.6689 12.8632 15.126 13.7554 16.1404 15.082L13.1173 18.1081C12.8558 17.5301 12.393 17.0668 11.8156 16.805C10.5038 16.2119 8.96057 16.7949 8.36804 18.1081C7.7755 19.4212 8.35798 20.9659 9.66979 21.559L9.66648 21.5624C10.0032 21.716 10.3687 21.7949 10.7382 21.7949H15.9503V21.8302L15.9573 21.8231H21.1693C22.6079 21.8231 23.7748 20.6559 23.7748 19.2149C23.7748 17.7749 22.6089 16.6068 21.1693 16.6068V16.0862C21.1991 14.5075 20.5123 13.0015 19.3037 11.9905ZM6.65329 24.5786L6.64583 24.6084C7.82385 25.4986 9.26142 25.9769 10.7382 25.9709H15.9281L15.9573 26.0001H21.1693C24.1571 26.0232 26.8079 24.0848 27.6952 21.2289C28.5805 18.3721 27.494 15.2705 25.0192 13.5949C24.5394 11.8276 23.5555 10.2386 22.1864 9.02311L22.1445 9.06498L22.1502 9.01585C18.2681 5.58602 12.3418 5.95559 8.91538 9.84159C7.96271 10.9211 7.27159 12.205 6.89535 13.5947C6.94368 13.5748 6.9931 13.5584 7.04324 13.5454C5.81164 14.3597 4.84887 15.5735 4.35512 17.0417C3.43162 19.7877 4.3521 22.8188 6.64678 24.5851L6.65329 24.5786Z',
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
export default QIGCP;
