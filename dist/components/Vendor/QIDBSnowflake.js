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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SvgComponent from '../../common/SvgComponent';
export var QIDBSnowflake = function (_a) {
    var props = __rest(_a, []);
    return (_jsxs(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "false" }, props, { children: [_jsx("path", { d: "M24.6266 22.2621L19.539 19.3379C18.8201 18.9517 17.9353 19.1724 17.4929 19.8897C17.327 20.1655 17.2717 20.4966 17.327 20.7724V26.5104C17.327 27.3379 17.9906 28 18.8201 28C19.6496 28 20.3132 27.3379 20.3132 26.5104V23.2L23.1335 24.8552C23.8524 25.2414 24.7371 25.0207 25.1795 24.3035C25.5666 23.5862 25.3454 22.7035 24.6266 22.2621Z", fill: "#29B5E8" }, void 0), _jsx("path", { d: "M11.9631 16.0276C11.9631 15.4758 11.6866 15.0345 11.2442 14.7586L6.21198 11.7793C5.99078 11.6689 5.71428 11.5586 5.49308 11.5586C4.99539 11.5586 4.49769 11.8345 4.22119 12.2758C3.8341 12.9931 4.05529 13.8758 4.77419 14.262L7.70506 15.9724L4.77419 17.6827C4.44239 17.9034 4.22119 18.1793 4.11059 18.5655C3.99999 18.9517 4.05529 19.3379 4.27649 19.6689C4.55299 20.1103 4.99539 20.3862 5.54838 20.3862C5.82488 20.3862 6.04608 20.331 6.26728 20.1655L11.3548 17.2413C11.6866 17.0207 12.0184 16.5241 11.9631 16.0276Z", fill: "#29B5E8" }, void 0), _jsx("path", { d: "M7.31826 9.73793L12.4058 12.6621C13.0141 12.9931 13.733 12.8828 14.1754 12.4414C14.4519 12.1655 14.6731 11.7793 14.6731 11.3379V5.48966C14.6731 4.66207 14.0095 4 13.18 4C12.3505 4 11.6869 4.66207 11.6869 5.48966V8.8L8.81134 7.14483C8.09245 6.75862 7.20766 6.97931 6.76526 7.69655C6.37816 8.41379 6.59936 9.29655 7.31826 9.73793Z", fill: "#29B5E8" }, void 0), _jsx("path", { d: "M18.7652 16.2483C18.7652 16.3586 18.7099 16.5242 18.5993 16.5793L16.6085 18.5655C16.5532 18.6207 16.3873 18.7311 16.2767 18.7311H15.779C15.6684 18.7311 15.5025 18.6759 15.4472 18.5655L13.4564 16.5793C13.4011 16.5242 13.2905 16.3586 13.2905 16.2483V15.7517C13.2905 15.6414 13.3458 15.4759 13.4564 15.4207L15.4472 13.4345C15.5025 13.3793 15.6684 13.269 15.779 13.269H16.2767C16.3873 13.269 16.5532 13.3242 16.6085 13.4345L18.5993 15.4207C18.6546 15.4759 18.7652 15.6414 18.7652 15.7517V16.2483ZM16.9403 16.0276C16.9403 15.9173 16.885 15.8069 16.8297 15.7517L16.2214 15.1448C16.1661 15.0897 16.0555 15.0345 16.0002 15.0345C15.9449 15.0345 15.779 15.0897 15.7237 15.1448L15.1154 15.7517C15.0601 15.8069 15.0048 15.9173 15.0048 16.0276C15.0048 16.1379 15.0601 16.2483 15.1154 16.3035L15.7237 16.9104C15.779 16.9655 15.8896 17.0207 16.0002 17.0207C16.1108 17.0207 16.2214 16.9655 16.2767 16.9104L16.885 16.3035C16.885 16.1931 16.9403 16.0828 16.9403 16.0276Z", fill: "#29B5E8" }, void 0), _jsx("path", { d: "M19.5391 12.6621L24.6266 9.73793C25.3455 9.35172 25.5667 8.41379 25.1796 7.69655C24.7925 6.97931 23.8524 6.75862 23.1335 7.14483L20.3133 8.8V5.48966C20.3133 4.66207 19.6497 4 18.8202 4C17.9907 4 17.3271 4.66207 17.3271 5.48966V11.2276C17.2718 11.5034 17.3824 11.8345 17.493 12.1103C17.9354 12.8276 18.8202 13.0483 19.5391 12.6621Z", fill: "#29B5E8" }, void 0), _jsx("path", { d: "M13.4012 19.1724C13.0694 19.1173 12.6823 19.1724 12.4058 19.3379L7.31826 22.2621C6.59936 22.6483 6.37816 23.5862 6.76526 24.3035C7.15236 25.0207 8.09245 25.2414 8.81134 24.8552L11.6869 23.2V26.5104C11.6869 27.338 12.3505 28 13.18 28C14.0095 28 14.6731 27.338 14.6731 26.5104V20.6621C14.6731 19.8897 14.1201 19.2828 13.4012 19.1724Z", fill: "#29B5E8" }, void 0), _jsx("path", { d: "M27.7786 12.331C27.3915 11.6138 26.4514 11.3931 25.7325 11.7793L20.6449 14.7034C20.1472 14.9793 19.8707 15.4758 19.926 16.0276C19.926 16.5241 20.2025 17.0758 20.6449 17.3517L25.7325 20.2758C26.4514 20.662 27.3362 20.4414 27.7786 19.7241C28.1657 19.0069 27.9445 18.1241 27.2256 17.6827L24.35 16.0276L27.2256 14.3724C27.9445 13.931 28.1657 13.0483 27.7786 12.331Z", fill: "#29B5E8" }, void 0)] }), void 0));
};
