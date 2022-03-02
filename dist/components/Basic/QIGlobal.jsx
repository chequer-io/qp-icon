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
var QIGlobal = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM27.95 15H21.96C21.85 11.32 20.91 7.71 19.21 4.45C24.04 5.8 27.52 10 27.95 15ZM16 28C15.77 28 15.55 27.99 15.33 27.96C13.28 24.67 12.14 20.88 12.04 17H19.97C19.87 20.88 18.73 24.66 16.67 27.96C16.45 27.99 16.22 28 16 28ZM12.03 15C12.13 11.12 13.27 7.34 15.32 4.04C15.77 3.98 16.22 3.98 16.66 4.04C18.71 7.33 19.85 11.12 19.96 15H12.03ZM12.79 4.45C11.09 7.71 10.14 11.32 10.04 15H4.05C4.48 10 7.96 5.8 12.79 4.45ZM4.05 17H10.04C10.15 20.68 11.09 24.29 12.79 27.55C7.96 26.2 4.48 22 4.05 17ZM19.21 27.55C20.91 24.29 21.86 20.68 21.96 17H27.95C27.52 22 24.04 26.2 19.21 27.55Z" fill="black"/>
  </SvgComponent>);
};
export default QIGlobal;
