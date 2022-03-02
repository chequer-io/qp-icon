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
var QIObjectTableLine = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M27 3H5C4.46957 3 3.96089 3.21071 3.58582 3.58578C3.21074 3.96086 3 4.46957 3 5V27C3 27.5304 3.21074 28.0391 3.58582 28.4142C3.96089 28.7893 4.46957 29 5 29H27C27.5304 29 28.0391 28.7893 28.4142 28.4142C28.7893 28.0391 29 27.5304 29 27V5C29 4.46957 28.7893 3.96086 28.4142 3.58578C28.0391 3.21071 27.5304 3 27 3ZM27 5V11H5V5H27ZM17 13H27V19H17V13ZM15 19H5V13H15V19ZM5 21H15V27H5V21ZM17 27V21H27V27H17Z", fill: "black" })));
};
export default QIObjectTableLine;
