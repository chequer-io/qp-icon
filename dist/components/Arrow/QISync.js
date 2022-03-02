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
var QISync = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.78001 10.0134H12V12.0134H4.00001V4.01343H6.00001V7.69336C7.70895 5.63611 10.0108 4.15589 12.5918 3.45471C15.1728 2.75354 17.9072 2.86548 20.4222 3.77527C22.9372 4.68506 25.1104 6.34839 26.6455 8.53845C28.1805 10.7286 29.0028 13.3389 29 16.0134H27C27.0002 13.642 26.234 11.334 24.8156 9.43347C23.3972 7.53308 21.4027 6.14185 19.1292 5.46716C16.8558 4.7926 14.4252 4.87073 12.1998 5.68994C9.97442 6.50916 8.07336 8.02576 6.78001 10.0134ZM25.22 22.0134H20V20.0134H28V28.0134H26V24.3335C24.2911 26.3907 21.9892 27.8709 19.4082 28.572C16.8273 29.2733 14.0929 29.1614 11.5778 28.2516C9.06283 27.3418 6.88961 25.6785 5.35454 23.4883C3.81948 21.2982 2.99726 18.688 3.00001 16.0134H5.00001C4.99987 18.3849 5.76607 20.6928 7.18442 22.5933C8.60279 24.4938 10.5973 25.885 12.8708 26.5596C15.1442 27.2343 17.5748 27.1561 19.8002 26.3369C22.0256 25.5176 23.9267 24.0011 25.22 22.0134Z", fill: "black" })));
};
export default QISync;
