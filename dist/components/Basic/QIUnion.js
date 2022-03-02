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
var QIUnion = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 22L5.90726 18.7783C6.12002 18.557 6.25 18.2496 6.25 17.9176V12.9C6.25 7.4784 10.7882 3 16 3C21.2118 3 25.75 7.4784 25.75 12.9V17.9176C25.75 18.2496 25.8682 18.557 26.0927 18.7906L29 22V24H21C21 26.7614 18.7614 29 16 29C13.2386 29 11 26.7614 11 24H5H3V22ZM13 24C13 25.6569 14.3431 27 16 27C17.6569 27 19 25.6569 19 24H13ZM24.6543 20.1802L26.4124 22H5.58297L7.3485 20.165L7.34923 20.1642C7.91649 19.574 8.25 18.7714 8.25 17.9176V12.9C8.25 8.57108 11.9046 5 16 5C20.0954 5 23.75 8.57108 23.75 12.9V17.9176C23.75 18.7358 24.0476 19.5488 24.6507 20.1764L24.6543 20.1802Z", fill: "black" })));
};
export default QIUnion;
