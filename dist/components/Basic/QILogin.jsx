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
var QILogin = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 30H26C27.1 30 28 29.1 28 28V4C28 2.90002 27.1 2 26 2H14C12.9 2 12 2.90002 12 4V7H14V4H26V28H14V25H12V28C12 29.1 12.9 30 14 30ZM18.17 17L14.59 20.59L16 22L22 16L16 10L14.59 11.41L18.17 15H4V17H18.17Z" fill="black"/>
  </SvgComponent>);
};
export default QILogin;
