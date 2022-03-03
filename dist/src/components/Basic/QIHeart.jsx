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
const QIHeart = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 29C16 29 25.4509 21 27.9521 18C30.4532 15 30.9029 9.48 27.952 6.5C26.4816 5.01 24.4046 4 22.474 4C20.6467 4 18.7906 4.67194 17.3504 6.00734C17.2691 6.08278 17.1891 6.16033 17.1104 6.24L16 7.5L14.8898 6.24C14.8111 6.16029 14.7311 6.08271 14.6498 6.00724C13.2105 4.67191 11.3628 4 9.52604 4C7.59549 4 5.51842 5.01 4.048 6.5C1.09715 9.48 1.54674 15 4.04803 18C6.54932 21 16 29 16 29ZM13.4294 7.60785C12.3553 6.53959 10.9389 6 9.52604 6C8.23771 6 6.6488 6.71188 5.47153 7.90483L5.46914 7.90724C4.47321 8.91302 3.95692 10.4544 4.00277 12.1897C4.04875 13.9302 4.65942 15.6101 5.58415 16.7192C6.71841 18.0797 9.57909 20.7229 12.2898 23.1293C13.6179 24.3083 14.8695 25.3953 15.7896 26.1878C15.8618 26.25 15.932 26.3105 16.0001 26.3689C16.0681 26.3105 16.1383 26.25 16.2105 26.1878C17.1306 25.3953 18.3822 24.3083 19.7104 23.1293C22.4211 20.7229 25.2817 18.0797 26.4159 16.7193C27.3406 15.6102 27.9513 13.9302 27.9972 12.1897C28.0431 10.4544 27.5268 8.91301 26.5309 7.90724L26.5285 7.90483C25.3512 6.71187 23.7624 6 22.474 6C21.0697 6 19.6441 6.54052 18.5707 7.60793L15.9999 10.5251L13.4294 7.60785Z" fill="black"/>
  </SvgComponent>);
};
export default QIHeart;
