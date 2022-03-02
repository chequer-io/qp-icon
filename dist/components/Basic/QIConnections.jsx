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
var QIConnections = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 6H28V8H10V6ZM10 24H28V26H10V24ZM28 15H10V17H28V15ZM4 15H6V17H4V15ZM6 6H4V8H6V6ZM4 24H6V26H4V24Z" fill="black"/>
  </SvgComponent>);
};
export default QIConnections;
