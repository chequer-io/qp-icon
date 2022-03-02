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
import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
var QIWarehouse = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4 8H8V4H4V8ZM10 10H2V2H10V10ZM14 11H18V7H14V11ZM20 13H12V5H20V13ZM8 20H4V16H8V20ZM2 22H10V30H30V10H22V16H16V22H10V14H2V22ZM12 24V28H16V24H12ZM18 24V28H22V24H18ZM22 18H18V22H22V18ZM24 28H28V24H24V28ZM24 22H28V18H24V22ZM28 12H24V16H28V12Z" fill="black"/>
  </SvgComponent>);
};
export default QIWarehouse;
