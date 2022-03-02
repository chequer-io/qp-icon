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
var QICalendar = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M26 4H22V2H20V4H12V2H10V4H6C4.89 4 4 4.9 4 6V26C4 27.11 4.89 28 6 28H26C27.1 28 28 27.11 28 26V6C28 4.9 27.1 4 26 4ZM26 26H6V12H26V26ZM26 10H6V6H10V8H12V6H20V8H22V6H26V10Z" fill="black"/>
  </SvgComponent>);
};
export default QICalendar;
