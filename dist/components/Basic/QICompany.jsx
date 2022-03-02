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
var QICompany = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 28V4H8V28H24ZM24 2C25.1 2 26 2.90002 26 4V30H6V4C6 2.90002 6.89999 2 8 2H24ZM14 8H12V12H14V8ZM14 14H12V18H14V14ZM18 8H20V12H18V8ZM20 14H18V18H20V14ZM12 20H14V24H12V20ZM20 20H18V24H20V20Z" fill="black"/>
  </SvgComponent>);
};
export default QICompany;
