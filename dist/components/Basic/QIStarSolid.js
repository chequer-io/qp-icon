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
var QIStarSolid = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(SvgComponent, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M16.9414 3.08728C16.5596 2.30424 15.4404 2.30424 15.0586 3.08728L11.3084 10.7777L2.89492 12.0167C2.04123 12.1424 1.69826 13.186 2.31184 13.7909L8.41094 19.8038L6.97223 28.2801C6.8272 29.1346 7.72976 29.7827 8.49687 29.3749L16 25.3865L23.5031 29.3749C24.2702 29.7827 25.1728 29.1346 25.0278 28.2801L23.5891 19.8038L29.6882 13.7909C30.3017 13.186 29.9588 12.1424 29.1051 12.0167L20.6916 10.7777L16.9414 3.08728Z", fill: "black" })));
};
export default QIStarSolid;
