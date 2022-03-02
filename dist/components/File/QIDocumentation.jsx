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
var QIDocumentation = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 6H11V26H24C25.1046 26 26 25.1046 26 24V8C26 6.89543 25.1046 6 24 6ZM11 4H9H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H9H11H24C26.2091 28 28 26.2091 28 24V8C28 5.79086 26.2091 4 24 4H11ZM6 26H9V6H6L6 26ZM22 10H15V12H22V10Z" fill="black"/>
  </SvgComponent>);
};
export default QIDocumentation;
