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
export var QIStar = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6436 12.6026L5.08444 13.7158L10.5571 19.1111L9.26913 26.6994L16 23.1215L22.7309 26.6994L21.4429 19.1111L26.9156 13.7158L19.3564 12.6026L16 5.71973L12.6436 12.6026ZM15.0586 3.08728C15.4404 2.30424 16.5596 2.30424 16.9414 3.08728L20.6916 10.7777L29.1051 12.0167C29.9588 12.1424 30.3017 13.186 29.6882 13.7909L23.5891 19.8038L25.0278 28.2801C25.1728 29.1346 24.2702 29.7827 23.5031 29.3749L16 25.3865L8.49687 29.3749C7.72976 29.7827 6.8272 29.1346 6.97223 28.2801L8.41094 19.8038L2.31184 13.7909C1.69826 13.186 2.04123 12.1424 2.89492 12.0167L11.3084 10.7777L15.0586 3.08728Z", fill: "black" }, void 0) }), void 0));
};
