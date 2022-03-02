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
var QIUndo = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M20 10H7.81L11.4 6.41L10 5L4 11L10 17L11.4 15.59L7.82001 12H20C21.5913 12 23.1174 12.6321 24.2426 13.7574C25.3678 14.8826 26 16.4087 26 18C26 19.5913 25.3678 21.1174 24.2426 22.2426C23.1174 23.3679 21.5913 24 20 24H12V26H20C22.1217 26 24.1566 25.1572 25.6569 23.6569C27.1572 22.1566 28 20.1217 28 18C28 15.8783 27.1572 13.8434 25.6569 12.3431C24.1566 10.8428 22.1217 10 20 10Z", fill: "black" })));
};
export default QIUndo;
