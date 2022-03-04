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
import { jsx as _jsx } from "react/jsx-runtime";
import SvgComponent from '../../common/SvgComponent';
export var QIOpenFile = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.17 6L14.58 9.41L15.17 10H16H24V14H7.5086C6.61564 14 5.83087 14.592 5.58555 15.4506L4 21V10V8V6H11.17ZM4.65146 26H24.1429L28 16H7.5086L4.65146 26ZM4 28C2.9 28 2 27.11 2 26V6C2 4.9 2.9 4 4 4H11.17C11.7 4 12.21 4.21 12.59 4.59L16 8H24C25.11 8 26 8.9 26 10V14H28C29.3288 14 30.2881 15.2718 29.923 16.5494L26.0659 26.5494C25.8206 27.408 25.0358 28 24.1429 28H4Z", fill: "black" }, void 0) }), void 0));
};
