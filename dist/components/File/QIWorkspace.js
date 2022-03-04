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
export var QIWorkspace = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.71 9.29004L16.71 2.29004C16.52 2.09998 16.26 2 16 2H6C4.89999 2 4 2.90002 4 4V28C4 29.1001 4.89999 30 6 30H18V28H6V4H14V10C14 11.1 14.9 12 16 12H22V16H24V10C24 9.72998 23.89 9.47998 23.71 9.29004ZM16 4.41003L21.59 10H16V4.41003ZM18 18H20L21 23L22 18H24L25 23L26 18H28L26 28H24L23 23L22 28H20L18 18Z", fill: "black" }, void 0) }), void 0));
};
