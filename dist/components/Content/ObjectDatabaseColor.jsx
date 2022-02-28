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
import SvgComponent from '../../common/SvgComponent';
var ObjectDatabaseColor = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 12C20.1739 12 23.8502 11.1121 26 9.76483V16C26 16.0106 25.9995 16.0477 25.961 16.126C25.919 16.2116 25.8303 16.3472 25.6534 16.5214C25.2882 16.8812 24.6572 17.2972 23.7161 17.6894C21.8425 18.47 19.1157 19 16 19C12.8844 19 10.1575 18.47 8.28395 17.6894C7.34282 17.2972 6.71178 16.8812 6.34659 16.5214C6.16969 16.3472 6.08099 16.2116 6.03899 16.126C6.00053 16.0477 6 16.0106 6 16V9.76483C8.14984 11.1121 11.8261 12 16 12ZM28 7V16V25C28 27.7614 22.6274 30 16 30C9.37258 30 4 27.7614 4 25V16V7C4 4.23858 9.37258 2 16 2C22.6274 2 28 4.23858 28 7ZM16 21C20.1739 21 23.8502 20.1121 26 18.7648V25C26 25.0106 25.9995 25.0477 25.961 25.126C25.919 25.2116 25.8303 25.3472 25.6534 25.5214C25.2882 25.8812 24.6572 26.2972 23.7161 26.6894C21.8425 27.47 19.1157 28 16 28C12.8844 28 10.1575 27.47 8.28395 26.6894C7.34282 26.2972 6.71178 25.8812 6.34659 25.5214C6.16969 25.3472 6.08099 25.2116 6.03899 25.126C6.00053 25.0477 6 25.0106 6 25V18.7648C8.14984 20.1121 11.8261 21 16 21Z"
        fill="#01519D"
      />
    </SvgComponent>
  );
};
export default ObjectDatabaseColor;
