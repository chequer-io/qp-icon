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
export var QIQuestionCircleLine = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM16.0016 8C17.3145 8 18.5523 8.45 19.4901 9.27187C20.4654 10.125 21.0031 11.2719 21 12.5C21 14.3063 19.809 15.9312 17.9647 16.6406C17.6816 16.7499 17.438 16.9419 17.2657 17.1917C17.0934 17.4414 17.0004 17.7373 16.9987 18.0406V18.75V19H15L14.9981 18.75V18.0781C14.9981 17.3563 15.2107 16.6438 15.6202 16.05C16.0234 15.4688 16.5861 15.025 17.2488 14.7719C18.3148 14.3625 19.0025 13.4719 19.0025 12.5C19.0025 11.1219 17.6552 10 16.0016 10C14.3479 10 13.0006 11.1219 13.0006 12.5L13 13H11V12.5C11 11.2719 11.5377 10.125 12.513 9.27187C13.4508 8.45312 14.6886 8 16.0016 8ZM16.006 24C16.8665 24 17.5 23.3187 17.5 22.494C17.5 21.6574 16.8546 21 16.006 21C15.1693 21 14.5 21.6454 14.5 22.494C14.5 23.3307 15.1693 24 16.006 24Z", fill: "black" }, void 0) }), void 0));
};
