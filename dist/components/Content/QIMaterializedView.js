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
export var QIMaterializedView = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27 7H23V3C23 2.4696 22.7892 1.96082 22.4142 1.58582C22.0391 1.21069 21.5304 1 21 1H3C2.46957 1 1.96088 1.21069 1.58582 1.58582C1.21075 1.96082 1 2.4696 1 3V21C1 21.5304 1.21075 22.0392 1.58582 22.4142C1.96088 22.7893 2.46957 23 3 23H7V27C7 27.5304 7.21075 28.0392 7.58582 28.4142C7.96088 28.7893 8.46957 29 9 29H21V27H9V23H21C21.5304 23 22.0391 22.7893 22.4142 22.4142C22.7892 22.0392 23 21.5304 23 21V9H27V21H29V9C29 8.4696 28.7892 7.96082 28.4142 7.58582C28.0391 7.21069 27.5304 7 27 7ZM21 21H13V16H21V21ZM21 14H13V9H21V14ZM11 14H3V9H11V14ZM21 3V7H3V3H21ZM3 21V16H11V21H3ZM25.693 23H23V31H25V26.848L25.807 29H28.193L29 26.848V31H31V23H28.307L27 26.4854L25.693 23Z", fill: "black" }, void 0) }), void 0));
};
