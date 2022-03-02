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
var QIComment = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32", className: "querypie_icon", "data-qi-has-multi-path": "true" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8284 29L21.8284 23H26C28.21 23 30 21.21 30 19V7C30 4.79004 28.21 3 26 3H6C3.79004 3 2 4.79004 2 7V19C2 21.21 3.79004 23 6 23H15V21H6C4.89001 21 4 20.11 4 19V7C4 5.89001 4.89001 5 6 5H26C27.11 5 28 5.89001 28 7V19C28 20.11 27.11 21 26 21H21L13 29H15.8284Z", fill: "black" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12H26V14H22V12ZM9 16H6V18H9V16ZM11 16H17V18H11V16ZM19 18V16H25V18H19ZM20 12H13V14H20V12ZM6 12H11V14H6V12Z", fill: "black" })));
};
export default QIComment;
