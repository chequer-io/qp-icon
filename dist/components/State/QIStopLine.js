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
var QIStopLine = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28 16C28 9.38 22.62 4 16 4C9.38 4 4 9.38 4 16C4 22.62 9.38 28 16 28C22.62 28 28 22.62 28 16ZM2 16C2 8.27 8.27002 2 16 2C23.73 2 30 8.27 30 16C30 23.73 23.73 30 16 30C8.27002 30 2 23.73 2 16ZM10 12C10 10.9 10.89 10 12 10H20C21.1 10 22 10.9 22 12V20C22 21.11 21.1 22 20 22H12C10.89 22 10 21.11 10 20V12ZM12 20H20V12H12V20Z", fill: "black" })));
};
export default QIStopLine;
