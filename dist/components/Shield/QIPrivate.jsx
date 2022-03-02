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
import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
var QIPrivate = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.4545 6.76924C13.0542 6.08655 16 4 16 4C16 4 18.9458 6.08655 20.5454 6.76924C22.0628 7.41682 26 8.00001 26 8.00001V15C26 21.1066 21.7333 26.6136 16 28C10.2667 26.6136 6.00002 21.1066 6.00002 15L6 8.00001C6 8.00001 9.93713 7.41682 11.4545 6.76924ZM23.4625 9.59117C23.6473 9.62687 23.8274 9.66061 24 9.69215V15C24 20.0458 20.57 24.5865 16 25.9301C11.43 24.5865 8.00002 20.0458 8.00002 15L8 9.69214C8.17257 9.66061 8.35268 9.62687 8.53752 9.59117C9.68087 9.37034 11.2536 9.02952 12.2396 8.60873C13.2174 8.19144 14.4859 7.40909 15.415 6.80688C15.6213 6.67313 15.8181 6.54353 16 6.42236C16.1819 6.54353 16.3787 6.67313 16.585 6.80688C17.5141 7.40909 18.7826 8.19144 19.7604 8.60873C20.7464 9.02953 22.3191 9.37034 23.4625 9.59117ZM16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5ZM17 21.5L17 15.5H15V21.5H17Z" fill="black"/>
  </SvgComponent>);
};
export default QIPrivate;
