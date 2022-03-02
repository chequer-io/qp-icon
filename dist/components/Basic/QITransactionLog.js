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
var QITransactionLog = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4H28C29.1 4 30 4.90002 30 6V10C30 11.1 29.1 12 28 12V26C28 27.1 27.1 28 26 28H6C4.90002 28 4 27.1 4 26V12C2.90002 12 2 11.1 2 10V6C2 4.90002 2.90002 4 4 4ZM6 26H26V12H6V26ZM4 10H28V6H4V10ZM12 20H20C21.1 20 22 19.1 22 18V16C22 14.9 21.1 14 20 14H12C10.9 14 10 14.9 10 16V18C10 19.1 10.9 20 12 20ZM12 18V16H20V18H12Z", fill: "black" })));
};
export default QITransactionLog;
