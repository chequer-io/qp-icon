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
var QIRestore = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M26 8H5.83L9.42 4.41L8 3L2 9L8 15L9.41 13.59L5.83 10H26V26H6V19H4V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V10C28 8.9 27.1 8 26 8Z" fill="black"/>
  </SvgComponent>);
};
export default QIRestore;
