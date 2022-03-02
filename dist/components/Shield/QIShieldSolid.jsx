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
var QIShieldSolid = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M6.00003 15L6.00001 8.00001C6.00001 8.00001 9.93715 7.41682 11.4545 6.76924C13.0542 6.08655 16 4 16 4C16 4 18.9458 6.08655 20.5455 6.76924C22.0629 7.41682 26 8.00001 26 8.00001V15C26 21.1066 21.7333 26.6136 16 28C10.2667 26.6136 6.00003 21.1066 6.00003 15Z" fill="black"/>
  </SvgComponent>);
};
export default QIShieldSolid;
