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
var QIMail = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M28 6H4C2.9 6 2 6.89 2 8V24C2 25.1 2.9 26 4 26H28C29.1 26 30 25.1 30 24V8C30 6.9 29.1 6 28 6ZM25.8 8L16 14.78L6.2 8H25.8ZM4 24V8.91L15.43 16.83C15.6 16.94 15.8 17 16 17C16.2 17 16.4 16.94 16.57 16.82L28 8.91V24H4Z" fill="black"/>
  </SvgComponent>);
};
export default QIMail;
