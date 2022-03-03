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
const QILogout = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18 30H6C4.90002 30 4 29.1 4 28V4C4 2.90002 4.90002 2 6 2H18C19.1 2 20 2.90002 20 4V7H18V4H6V28H18V25H20V28C20 29.1 19.1 30 18 30ZM24.17 17L20.59 20.59L22 22L28 16L22 10L20.59 11.41L24.17 15H10V17H24.17Z" fill="black"/>
  </SvgComponent>);
};
export default QILogout;
