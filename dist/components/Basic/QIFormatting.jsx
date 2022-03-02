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
var QIFormatting = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M28 4H4V6H28V4ZM4 9L12 16L4 23V9ZM28 26H4V28H28V26ZM14 20.5H28V22.5H14V20.5ZM28 15H14V17H28V15ZM14 9.5H28V11.5H14V9.5Z" fill="black"/>
  </SvgComponent>);
};
export default QIFormatting;
