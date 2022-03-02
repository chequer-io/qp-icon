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
var QIShrink = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M28.59 2L30 3.42004L21.41 12H28V14H18V4H20V10.59L28.59 2ZM4 20V18H14V28H12V21.41L3.41 30L2 28.58L10.59 20H4Z" fill="black"/>
  </SvgComponent>);
};
export default QIShrink;
