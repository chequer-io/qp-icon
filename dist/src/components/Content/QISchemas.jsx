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
const QISchemas = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 6L2 12.5L8.5 19L15 12.5L8.5 6ZM8.5 17.5858L3.41422 12.5L8.5 7.41418L13.5858 12.5L8.5 17.5858ZM8.5 9L5 12.5L8.5 16L12 12.5L8.5 9ZM23.5 6L17 12.5L23.5 19L30 12.5L23.5 6ZM23.5 17.5858L18.4142 12.5L23.5 7.41418L28.5858 12.5L23.5 17.5858ZM23.5 9L20 12.5L23.5 16L27 12.5L23.5 9ZM9.5 20L16 13.5L22.5 20L16 26.5L9.5 20ZM10.9142 20L16 25.0858L21.0858 20L16 14.9142L10.9142 20ZM12.5 20L16 16.5L19.5 20L16 23.5L12.5 20Z" fill="black"/>
  </SvgComponent>);
};
export default QISchemas;
