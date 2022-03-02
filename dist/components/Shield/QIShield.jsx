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
var QIShield = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 4C16 4 13.0542 6.08655 11.4545 6.76924C9.93713 7.41682 6 8.00001 6 8.00001L6.00002 15C6.00002 21.1066 10.2667 26.6136 16 28C21.7333 26.6136 26 21.1066 26 15V8.00001C26 8.00001 22.0628 7.41682 20.5454 6.76924C18.9458 6.08655 16 4 16 4ZM24 9.69215C23.8274 9.66061 23.6473 9.62687 23.4625 9.59117C22.3191 9.37034 20.7464 9.02953 19.7604 8.60873C18.7826 8.19144 17.5141 7.40909 16.585 6.80688C16.3787 6.67313 16.1819 6.54353 16 6.42236C15.8181 6.54353 15.6213 6.67313 15.415 6.80688C14.4859 7.40909 13.2174 8.19144 12.2396 8.60873C11.2536 9.02952 9.68087 9.37034 8.53752 9.59117C8.35268 9.62687 8.17257 9.66061 8 9.69214L8.00002 15C8.00002 20.0458 11.43 24.5865 16 25.9301C20.57 24.5865 24 20.0458 24 15V9.69215Z" fill="black"/>
  </SvgComponent>);
};
export default QIShield;
