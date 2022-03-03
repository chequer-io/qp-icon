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
const QIChevronRight = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path d="M21.41 16L11.41 26L10 24.59L18.58 16L10 7.41L11.41 6L21.41 16Z" fill="black"/>
  </SvgComponent>);
};
export default QIChevronRight;
