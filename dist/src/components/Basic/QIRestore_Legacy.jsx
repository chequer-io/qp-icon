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
const QIRestore_Legacy = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M28 22V18H30V22C30 23.1 29.1 24 28 24H24V28C24 29.1 23.1 30 22 30H4C2.90002 30 2 29.1 2 28V10C2 8.90002 2.90002 8 4 8H8V4C8 2.90002 8.90002 2 10 2H14V4H10V8H22C23.1 8 24 8.90002 24 10V22H28ZM4 28H22V10H4V28ZM17 2H21V4H17V2ZM30 8H28V4H24V2H28C29.1 2 30 2.90002 30 4V8ZM30 11H28V15H30V11Z" fill="black"/>
  </SvgComponent>);
};
export default QIRestore_Legacy;
