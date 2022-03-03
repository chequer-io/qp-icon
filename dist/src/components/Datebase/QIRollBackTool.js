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
var QIRollBackTool = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.961 7.12604C25.9995 7.04772 26 7.01059 26 7C26 6.98941 25.9995 6.95228 25.961 6.87396C25.919 6.78844 25.8303 6.65282 25.6534 6.47856C25.2882 6.1188 24.6572 5.70276 23.7161 5.31062C21.8425 4.52998 19.1156 4 16 4C12.8844 4 10.1575 4.52998 8.28395 5.31062C7.34282 5.70276 6.71178 6.1188 6.34659 6.47856C6.16969 6.65282 6.08099 6.78844 6.03899 6.87396C6.00053 6.95228 6 6.98941 6 7C6 7.01059 6.00053 7.04772 6.03899 7.12604C6.08099 7.21156 6.16969 7.34718 6.34659 7.52144C6.71178 7.8812 7.34282 8.29724 8.28395 8.68938C10.1575 9.47002 12.8844 10 16 10C19.1156 10 21.8425 9.47002 23.7161 8.68938C24.6572 8.29724 25.2882 7.8812 25.6534 7.52144C25.8303 7.34718 25.919 7.21156 25.961 7.12604ZM26 9.76483C23.8502 11.1121 20.1739 12 16 12C11.8261 12 8.14984 11.1121 6 9.76483V16C6 16.0106 6.00053 16.0477 6.03899 16.126C6.08099 16.2116 6.16969 16.3472 6.34659 16.5214C6.71178 16.8812 7.34282 17.2972 8.28395 17.6894C10.1575 18.47 12.8844 19 16 19C16.6872 19 17.3556 18.9742 18 18.9256V20.9309C17.3496 20.9763 16.6814 21 16 21C11.8261 21 8.14984 20.1121 6 18.7648V25C6 25.0106 6.00053 25.0477 6.03899 25.126C6.08099 25.2116 6.16969 25.3472 6.34659 25.5214C6.71178 25.8812 7.34282 26.2972 8.28395 26.6894C10.1575 27.47 12.8844 28 16 28C16.6872 28 17.3556 27.9742 18 27.9256V29.9309C17.3496 29.9763 16.6814 30 16 30C9.37258 30 4 27.7614 4 25V16V7C4 4.23858 9.37258 2 16 2C22.6274 2 28 4.23858 28 7V15H26V9.76483ZM28.59 23.59L30 25L25 30L20 25L21.41 23.59L24 26.17V18H26V26.17L28.59 23.59Z", fill: "black" }, void 0) }), void 0));
};
export default QIRollBackTool;
