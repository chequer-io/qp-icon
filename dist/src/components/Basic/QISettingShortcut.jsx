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
const QISettingShortcut = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M28 4H4V28H28V4ZM4 2C2.89543 2 2 2.89543 2 4V28C2 29.1046 2.89543 30 4 30H28C29.1046 30 30 29.1046 30 28V4C30 2.89543 29.1046 2 28 2H4ZM9 8H11C11.5523 8 12 8.44772 12 9V12H9C8.44772 12 8 11.5523 8 11V9C8 8.44772 8.44772 8 9 8ZM14 12H18V9C18 7.34315 19.3431 6 21 6H23C24.6569 6 26 7.34315 26 9V11C26 12.6569 24.6569 14 23 14H20V18H23C24.6569 18 26 19.3431 26 21V23C26 24.6569 24.6569 26 23 26H21C19.3431 26 18 24.6569 18 23V20H14V23C14 24.6569 12.6569 26 11 26H9C7.34315 26 6 24.6569 6 23V21C6 19.3431 7.34315 18 9 18H12V14H9C7.34315 14 6 12.6569 6 11V9C6 7.34315 7.34315 6 9 6H11C12.6569 6 14 7.34315 14 9V12ZM20 23V20H23C23.5523 20 24 20.4477 24 21V23C24 23.5523 23.5523 24 23 24H21C20.4477 24 20 23.5523 20 23ZM12 20H9C8.44772 20 8 20.4477 8 21V23C8 23.5523 8.44772 24 9 24H11C11.5523 24 12 23.5523 12 23V20ZM23 12H20V9C20 8.44772 20.4477 8 21 8H23C23.5523 8 24 8.44772 24 9V11C24 11.5523 23.5523 12 23 12ZM14 14H18V18H14V14Z" fill="black"/>
  </SvgComponent>);
};
export default QISettingShortcut;
