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
const QIUnlock = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path d="M24 14H12V8C12 5.79 13.79 4 16 4C18.21 4 20 5.79 20 8H22C22 4.69 19.31 2 16 2C12.69 2 10 4.69 10 8V14H8C6.9 14 6 14.89 6 16V28C6 29.11 6.9 30 8 30H24C25.1 30 26 29.11 26 28V16C26 14.89 25.1 14 24 14ZM24 28H8V16H24V28Z" fill="black"/>
  </SvgComponent>);
};
export default QIUnlock;
