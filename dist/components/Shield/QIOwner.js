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
import React from 'react';
import SvgComponent from '../../common/SvgComponent.js';
var QIOwner = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32", className: "querypie_icon", "data-qi-has-multi-path": "false" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 8.00001L6.00002 15C6.00002 21.1066 10.2667 26.6136 16 28C21.7333 26.6136 26 21.1066 26 15V8.00001C26 8.00001 22.0628 7.41682 20.5454 6.76924C18.9458 6.08655 16 4 16 4C16 4 13.0542 6.08655 11.4545 6.76924C9.93713 7.41682 6 8.00001 6 8.00001ZM14.3244 14.0658L15.6638 11.2175C15.8001 10.9275 16.1998 10.9275 16.3362 11.2175L17.6756 14.0658L20.6804 14.5247C20.9853 14.5713 21.1077 14.9578 20.8886 15.1818L18.7104 17.4088L19.2242 20.5482C19.276 20.8647 18.9536 21.1047 18.6797 20.9537L16 19.4765L13.3203 20.9537C13.0463 21.1047 12.724 20.8647 12.7758 20.5482L13.2896 17.4088L11.1114 15.1818C10.8922 14.9578 11.0147 14.5713 11.3196 14.5247L14.3244 14.0658Z", fill: "black" })));
};
export default QIOwner;
