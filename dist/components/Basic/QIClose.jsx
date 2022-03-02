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
var QIClose = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M25 8.4L23.6 7L16 14.6L8.4 7.00001L7 8.40001L14.6 16L6.99999 23.6L8.39999 25L16 17.4L23.6 25L25 23.6L17.4 16L25 8.4Z" fill="black"/>
  </SvgComponent>);
};
export default QIClose;
