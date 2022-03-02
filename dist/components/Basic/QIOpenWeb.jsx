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
var QIOpenWeb = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 4V2H30V12H28V5.40997L19.41 14L18 12.59L26.59 4H20ZM4 26C4 27.1 4.90002 28 6 28H26C27.1 28 28 27.1 28 26V16H26V26H6V6H16V4H6C4.90002 4 4 4.90002 4 6V26Z" fill="black"/>
  </SvgComponent>);
};
export default QIOpenWeb;
