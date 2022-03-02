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
var QISqlFile = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32", className: "querypie_icon", "data-qi-has-multi-path": "false" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 10C23 9.69995 22.9 9.5 22.7 9.30005L15.7 2.30005C15.5 2.09998 15.3 2 15 2H5C3.89999 2 3 2.90002 3 4V28C3 29.11 3.89001 30 5 30H7V28H5V4H13V10C13 11.1 13.9 12 15 12H21V16H23V10ZM15 10V4.40002L20.6 10H15ZM13 28C14.1 28 15 27.1 15 26V24C15 22.9 14.1 22 13 22H11V20H15V18H11C9.89999 18 9 18.9 9 20V22C9 23.1 9.89999 24 11 24H13V26H9V28H13ZM20 18C21.1 18 22 18.9 22 20V26C22 27.1 21.1 28 20 28V29H22V31H20C18.9 31 18 30.1 18 29V28C16.9 28 16 27.1 16 26V20C16 18.9 16.9 18 18 18H20ZM25 18H23V28H29V26H25V18ZM18 20H20V26H18V20Z", fill: "black" })));
};
export default QISqlFile;
