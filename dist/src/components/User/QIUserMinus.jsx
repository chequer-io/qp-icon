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
const QIUserMinus = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4C14.76 4 17 6.23999 17 9C17 11.76 14.76 14 12 14C9.23999 14 7 11.76 7 9C7 6.23999 9.23999 4 12 4ZM12 2C8.13 2 5 5.13 5 9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2ZM22 30H20V23C20 20.24 15.76 20 13 20H11C8.23999 20 4 20.24 4 23V30H2V23C2 19.14 7.14001 18.01 11 18H13C16.86 18.01 21.99 19.14 22 23V30ZM32 14V16H22V14H32Z" fill="black"/>
  </SvgComponent>);
};
export default QIUserMinus;
