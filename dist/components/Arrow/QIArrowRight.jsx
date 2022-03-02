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
var QIArrowRight = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M18 6L16.57 7.39L24.15 15H4V17H24.15L16.57 24.57L18 26L28 16L18 6Z" fill="black"/>
  </SvgComponent>);
};
export default QIArrowRight;
