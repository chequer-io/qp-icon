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
var QIExclude = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 28H10V26H6V6H10V4H6C5.46957 4 4.96089 4.21074 4.58582 4.58582C4.21074 4.96089 4 5.46957 4 6V26C4 26.5304 4.21074 27.0391 4.58582 27.4142C4.96089 27.7893 5.46957 28 6 28ZM22 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96089 27.4142 4.58582C27.0391 4.21074 26.5304 4 26 4H22V6H26V26H22V28ZM20 10.5H18L16 14.1667L14 10.5H12L15 16L12 21.5H14L16 17.8333L18 21.5H20L17 16L20 10.5Z", fill: "black" }, void 0) }), void 0));
};
export default QIExclude;
