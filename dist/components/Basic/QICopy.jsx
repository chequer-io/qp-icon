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
var QICopy = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 18H4V4H18V2H4C2.90002 2 2 2.90002 2 4V18ZM10 28H28V10H10V28ZM10 8H28C29.1 8 30 8.90002 30 10V28C30 29.11 29.1 30 28 30H10C8.89001 30 8 29.11 8 28V10C8 8.90002 8.89001 8 10 8Z" fill="black"/>
  </SvgComponent>);
};
export default QICopy;
