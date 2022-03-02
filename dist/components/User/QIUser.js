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
var QIUser = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 9C21 6.23999 18.76 4 16 4C13.24 4 11 6.23999 11 9C11 11.76 13.24 14 16 14C18.76 14 21 11.76 21 9ZM9 9C9 5.13 12.13 2 16 2C19.87 2 23 5.13 23 9C23 12.87 19.87 16 16 16C12.13 16 9 12.87 9 9ZM24 30H26V23C25.99 19.14 20.86 18.01 17 18H15C11.14 18.01 6 19.14 6 23V30H8V23C8 20.24 12.24 20 15 20H17C19.76 20 24 20.24 24 23V30Z", fill: "black" })));
};
export default QIUser;
