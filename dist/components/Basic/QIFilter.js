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
var QIFilter = function (_a) {
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
            d: 'M4 4L28 4.00029L28 8.3634C28 9.03845 27.7318 9.68586 27.2544 10.1632L19.3792 18.038C19.311 18.1061 19.2727 18.1986 19.2727 18.2951V24.7261C19.2727 25.1392 19.0393 25.517 18.6697 25.7017L14.306 27.8834C13.5807 28.2461 12.7273 27.7187 12.7273 26.9077L12.7273 18.2951C12.7273 18.1986 12.689 18.1061 12.6208 18.038L4.74555 10.1632C4.26818 9.68586 4 9.03845 4 8.36339V4ZM6.18182 6.18172V8.36339C6.18182 8.45983 6.22013 8.55232 6.28832 8.62051L14.1635 16.4953C14.6409 16.9726 14.9091 17.62 14.9091 18.2951L14.9091 25.1427L17.0909 24.0519L17.0909 18.2951C17.0909 17.62 17.3591 16.9726 17.8364 16.4953L25.7117 8.62051C25.7799 8.55232 25.8182 8.45984 25.8182 8.36339L25.8182 6.18196L6.18182 6.18172Z',
            fill: '#14181F',
          },
          void 0,
        ),
      },
    ),
    void 0,
  );
};
export default QIFilter;
