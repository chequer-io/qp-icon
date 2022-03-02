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
var QICloseCircleLine = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32", className: "querypie_icon", "data-qi-has-multi-path": "true" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28 16C28 9.38 22.62 4 16 4C9.38 4 4 9.38 4 16C4 22.62 9.38 28 16 28C22.62 28 28 22.62 28 16ZM2 16C2 8.27 8.27 2 16 2C23.73 2 30 8.27 30 16C30 23.73 23.73 30 16 30C8.27 30 2 23.73 2 16Z", fill: "black" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.5858 16L9 10.4143L10.4142 9.00005L16 14.5858L21.5858 9L23 10.4142L17.4142 16L23 21.5858L21.5858 23L16 17.4142L10.4142 23L9.00001 21.5858L14.5858 16Z", fill: "black" })));
};
export default QICloseCircleLine;
