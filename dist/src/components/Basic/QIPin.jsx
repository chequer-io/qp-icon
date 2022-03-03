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
const QIPin = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path d="M28.59 13.31L30 11.9L20 2L18.69 3.42L19.88 4.61L8.38 14.32L6.66 12.6L5.25 14L10.91 19.68L2 28.58L3.41 30L12.32 21.09L18 26.75L19.39 25.34L17.67 23.62L27.39 12.13L28.59 13.31ZM16.26 22.2L9.8 15.74L21.29 6L26 10.71L16.26 22.2Z" fill="black"/>
  </SvgComponent>);
};
export default QIPin;
