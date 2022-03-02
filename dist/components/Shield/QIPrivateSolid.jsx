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
var QIPrivateSolid = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6 8.00001L6.00002 15C6.00002 21.1066 10.2667 26.6136 16 28C21.7333 26.6136 26 21.1066 26 15V8.00001C26 8.00001 22.0628 7.41682 20.5454 6.76924C18.9458 6.08655 16 4 16 4C16 4 13.0542 6.08655 11.4545 6.76924C9.93713 7.41682 6 8.00001 6 8.00001ZM16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5ZM17 21.5L17 15.5H15V21.5H17Z" fill="black"/>
  </SvgComponent>);
};
export default QIPrivateSolid;
