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
export var QIPrivate = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.5454 5.23078C12.465 4.43431 16 2 16 2C16 2 19.5349 4.43431 21.4545 5.23078C23.2754 5.98629 28 6.66667 28 6.66667V14.8333C28 21.9577 22.88 28.3826 16 30C9.11998 28.3826 4.00002 21.9577 4.00002 14.8333L4 6.66667C4 6.66667 8.72455 5.98629 10.5454 5.23078ZM25.041 8.19769C25.3777 8.26092 25.7014 8.31885 26 8.37052V14.8333C26 20.8688 21.7473 26.3586 16 27.9365C10.2526 26.3586 6.00002 20.8688 6.00002 14.8333L6 8.37051C6.29855 8.31884 6.62225 8.26092 6.95899 8.19769C8.33736 7.93886 10.1783 7.54842 11.3119 7.07808C12.4474 6.60695 13.942 5.71258 15.0588 5.00875C15.4 4.79375 15.7193 4.58794 16 4.40456C16.2807 4.58794 16.5999 4.79375 16.9411 5.00875C18.0579 5.71258 19.5525 6.60695 20.688 7.07808C21.8216 7.54842 23.6626 7.93886 25.041 8.19769ZM17.5 10.5C17.5 11.3284 16.8284 12 16 12C15.1716 12 14.5 11.3284 14.5 10.5C14.5 9.67157 15.1716 9 16 9C16.8284 9 17.5 9.67157 17.5 10.5ZM17 14V23H15V14H17Z", fill: "black" }, void 0) }), void 0));
};
