var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import SvgComponent from '../../common/SvgComponent';
var QIRefresh = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M26 19C26 20.9778 25.4135 22.9112 24.3147 24.5557C23.2159 26.2002 21.6541 27.4819 19.8268 28.2388C17.9996 28.9957 15.9889 29.1937 14.0491 28.8079C12.1093 28.422 10.3274 27.4696 8.92892 26.0711C7.53039 24.6726 6.57798 22.8907 6.19213 20.9509C5.80628 19.0111 6.00432 17.0004 6.76119 15.1732C7.51807 13.3459 8.79981 11.7841 10.4443 10.6853C12.0888 9.58649 14.0222 9 16 9H22.18L18.6 12.59L20 14L26 8L20 2L18.6 3.41L22.19 7H16C13.6266 7 11.3065 7.70379 9.33315 9.02237C7.35976 10.3409 5.8217 12.2151 4.91345 14.4078C4.00519 16.6005 3.76756 19.0133 4.23058 21.3411C4.69361 23.6689 5.83647 25.8071 7.5147 27.4853C9.19293 29.1635 11.3311 30.3064 13.6589 30.7694C15.9867 31.2324 18.3995 30.9948 20.5922 30.0865C22.7849 29.1783 24.659 27.6402 25.9776 25.6668C27.2962 23.6934 28 21.3734 28 19H26Z" fill="black"/>
  </SvgComponent>);
};
export default QIRefresh;
