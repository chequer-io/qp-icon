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
var QIAddFile = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 8H28C29.1 8 30 8.90002 30 10V18H28V10H15.2L14.6 9.40002L11.2 6H4V26H18V28H4C2.90002 28 2 27.1 2 26V6C2 4.90002 2.90002 4 4 4H11.2C11.7 4 12.2 4.19995 12.6 4.59998L16 8ZM24 20H26V24H30V26H26V30H24V26H20V24H24V20Z" fill="black"/>
  </SvgComponent>);
};
export default QIAddFile;
