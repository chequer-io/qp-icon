var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React from 'react';
import SvgComponent from '../../common/SvgComponent.js';
var QIWorkspace = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.71 2.29004L23.71 9.29004C23.89 9.47998 24 9.72998 24 10V16H22V12H16C14.9 12 14 11.1 14 10V4H6V28H18V30H6C4.89999 30 4 29.1001 4 28V4C4 2.90002 4.89999 2 6 2H16C16.26 2 16.52 2.09998 16.71 2.29004ZM21.59 10L16 4.41003V10H21.59Z", fill: "black" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 18H18L20 28H22L23 23L24 28H26L28 18H26L25 23L24 18H22L21 23L20 18Z", fill: "black" })));
};
export default QIWorkspace;
