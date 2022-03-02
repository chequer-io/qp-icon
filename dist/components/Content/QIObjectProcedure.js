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
var QIObjectProcedure = function (_a) {
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
            d: 'M10 10H2V2H10V10ZM4 8H8V4H4V8ZM20 20H12V12H20V20ZM14 18H18V14H14V18ZM22 30H30V22H22V30ZM28 28H24V24H28V28ZM8 27C6.40869 27 4.88254 26.3679 3.75732 25.2427C2.63211 24.1174 2 22.5913 2 21C2 19.4087 2.63211 17.8826 3.75732 16.7573C4.88254 15.6321 6.40869 15 8 15H10V17H8C6.93915 17 5.92178 17.4214 5.17163 18.1716C4.42148 18.9218 4 19.9391 4 21C4 22.0609 4.42148 23.0782 5.17163 23.8284C5.92178 24.5786 6.93915 25 8 25H20V27H8ZM22 17H24C25.5913 17 27.1175 16.3679 28.2427 15.2427C29.3679 14.1174 30 12.5913 30 11C30 9.40869 29.3679 7.88257 28.2427 6.75732C27.1175 5.63208 25.5913 5 24 5H12V7H24C25.0609 7 26.0782 7.42139 26.8284 8.17163C27.5785 8.92175 28 9.93909 28 11C28 12.0609 27.5785 13.0782 26.8284 13.8284C26.0782 14.5786 25.0609 15 24 15H22V17Z',
            fill: 'black',
          },
          void 0,
        ),
      },
    ),
    void 0,
  );
};
export default QIObjectProcedure;
