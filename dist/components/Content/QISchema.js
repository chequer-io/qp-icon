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
var QISchema = function (_a) {
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
            d: 'M15.2018 29.8419C15.4543 29.9467 15.7251 29.9999 15.9984 29.9984C16.2718 29.9999 16.5426 29.9467 16.795 29.8419C17.0475 29.7372 17.2765 29.583 17.4684 29.3884L29.3884 17.4684C29.778 17.0785 29.9969 16.5497 29.9969 15.9984C29.9969 15.4471 29.778 14.9185 29.3884 14.5284L17.4684 2.6084C17.0784 2.21887 16.5497 2 15.9984 2C15.4472 2 14.9185 2.21887 14.5284 2.6084L2.60843 14.5284C2.21884 14.9185 2 15.4471 2 15.9984C2 16.5497 2.21884 17.0785 2.60843 17.4684L14.5284 29.3884C14.7204 29.583 14.9494 29.7372 15.2018 29.8419ZM15.9384 3.99841H15.9984H16.0584L27.9984 15.9385C28.0132 15.955 28.0214 15.9763 28.0214 15.9984C28.0214 16.0206 28.0132 16.042 27.9984 16.0585L16.0584 27.9984C16.0419 28.0132 16.0206 28.0214 15.9984 28.0214C15.9763 28.0214 15.9549 28.0132 15.9384 27.9984L3.99844 16.0585C3.98367 16.042 3.97552 16.0206 3.97552 15.9984C3.97552 15.9763 3.98367 15.955 3.99844 15.9385L15.9384 3.99841ZM7.99878 15.9998L15.9962 8.00232L23.9935 15.9998L15.9962 23.9972L7.99878 15.9998Z',
            fill: 'black',
          },
          void 0,
        ),
      },
    ),
    void 0,
  );
};
export default QISchema;
