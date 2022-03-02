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
var QISettingLine = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.4424 16C26.4424 16.26 26.4225 16.51 26.4026 16.76L28.3225 18.45C29.0287 19.08 29.2078 20.12 28.7303 20.95L26.3827 25.04C26.0246 25.67 25.3581 26.04 24.6617 26.04C24.4528 26.04 24.234 26.01 24.0251 25.94L21.6178 25.12C21.2 25.4 20.7523 25.65 20.2947 25.87L19.7974 28.39C19.6084 29.33 18.7927 30 17.8476 30H13.1524C12.2073 30 11.3916 29.33 11.1927 28.41L10.6953 25.89C10.2477 25.66 9.80997 25.41 9.39217 25.13L6.9749 25.95C6.766 26.02 6.54716 26.05 6.33826 26.05C5.64192 26.05 4.97544 25.68 4.61732 25.05L2.26969 20.96C1.7922 20.14 1.96131 19.09 2.67754 18.46L4.58748 16.77C4.56758 16.51 4.55764 16.26 4.55764 16C4.55764 15.74 4.57753 15.49 4.59743 15.24L4.59743 15.24L2.67754 13.54C1.97126 12.91 1.7922 11.87 2.26969 11.04L4.61732 6.96C4.97544 6.33 5.64192 5.96 6.33826 5.96C6.54716 5.96 6.766 5.99 6.9749 6.06L9.38222 6.88C9.80002 6.6 10.2477 6.35 10.7053 6.13L11.2026 3.61C11.3817 2.67 12.2073 2 13.1524 2H17.8476C18.8026 2 19.6183 2.67 19.8073 3.6L20.3047 6.12C20.7523 6.34 21.19 6.6 21.6078 6.88L24.0251 6.06C24.234 5.98 24.4528 5.95 24.6617 5.95C25.3581 5.95 26.0146 6.32 26.3827 6.95L28.7303 11.04C29.2078 11.86 29.0387 12.91 28.3225 13.54L26.4125 15.23C26.4324 15.49 26.4424 15.74 26.4424 16ZM21.2497 22.88L24.6617 24.04L27.0094 19.96L24.3036 17.57C24.4827 16.52 24.4727 15.48 24.2937 14.44L27.0094 12.04L24.6617 7.95L21.2298 9.12C20.444 8.46 19.5288 7.91 18.5539 7.55L17.8476 4H13.1524L12.4461 7.55C11.4712 7.9 10.5461 8.43 9.75028 9.11L6.33826 7.95L3.99062 12.04L6.69637 14.44C6.51731 15.49 6.52726 16.53 6.70632 17.57L3.99062 19.96L6.33826 24.05L9.77018 22.88C10.556 23.54 11.4712 24.09 12.4461 24.45L13.1524 28H17.8476L18.5539 24.44C19.5288 24.09 20.4539 23.56 21.2497 22.88ZM9.5011 16C9.5011 19.36 12.1411 22 15.5011 22C18.8711 22 21.5011 19.36 21.5011 16C21.5011 12.64 18.8611 10 15.5011 10C12.1411 10 9.5011 12.64 9.5011 16ZM11.5011 16C11.5011 13.72 13.2211 12 15.5011 12C17.7811 12 19.5011 13.72 19.5011 16C19.5011 18.28 17.7811 20 15.5011 20C13.2211 20 11.5011 18.28 11.5011 16Z", fill: "black" })));
};
export default QISettingLine;
