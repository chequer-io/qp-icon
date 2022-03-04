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
export var QIDatabaseSolid = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28 19.7861V25C28 27.7614 22.6274 30 16 30C9.37258 30 4 27.7614 4 25V19.7861C4.77814 20.4301 5.72608 20.9569 6.74549 21.3817C9.21511 22.4107 12.4882 23 16 23C19.5118 23 22.7849 22.4107 25.2545 21.3817C26.2739 20.9569 27.2219 20.4301 28 19.7861ZM28 16V10.7861C27.2219 11.4301 26.2739 11.9569 25.2545 12.3817C22.7849 13.4107 19.5118 14 16 14C12.4882 14 9.21511 13.4107 6.74549 12.3817C5.72608 11.9569 4.77814 11.4301 4 10.7861V16C4 18.7614 9.37258 21 16 21C22.6274 21 28 18.7614 28 16ZM16 12C9.37258 12 4 9.76142 4 7C4 4.23858 9.37258 2 16 2C22.6274 2 28 4.23858 28 7C28 9.76142 22.6274 12 16 12Z", fill: "black" }, void 0) }), void 0));
};
