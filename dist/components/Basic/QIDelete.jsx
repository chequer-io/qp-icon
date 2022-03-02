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
var QIDelete = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2H20V4H12V2ZM4 6V8H6V28C6 29.1 6.90002 30 8 30H24C25.1 30 26 29.1 26 28V8H28V6H4ZM8 8H24V28H8V8ZM12 12H14V24H12V12ZM18 12H20V24H18V12Z" fill="black"/>
  </SvgComponent>);
};
export default QIDelete;
