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
const QISecurity = (_a) => {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" role="querypie-icon" data-qi-color-controllable="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 2C15 2 11.465 4.43431 9.54543 5.23078C7.72455 5.98629 3 6.66667 3 6.66667L3.00002 14.8333C3.00002 21.9577 8.11998 28.3826 15 30L15 30V27.9365L15 27.9365C9.25259 26.3586 5.00002 20.8688 5.00002 14.8333L5 8.37051C5.29855 8.31884 5.62225 8.26092 5.95899 8.19769C7.33736 7.93886 9.17832 7.54842 10.3119 7.07808C11.4474 6.60695 12.942 5.71258 14.0588 5.00875C14.4 4.79375 14.7193 4.58794 15 4.40456C15.2807 4.58794 15.5999 4.79375 15.9411 5.00875C17.0579 5.71258 18.5525 6.60695 19.688 7.07808C20.8216 7.54842 22.6626 7.93886 24.041 8.19769C24.3777 8.26092 24.7014 8.31885 25 8.37052V14H27V6.66667C27 6.66667 22.2754 5.98629 20.4545 5.23078C18.5349 4.43431 15 2 15 2ZM23.5 18C22.6716 18 22 18.6716 22 19.5V22H25V19.5C25 18.6716 24.3284 18 23.5 18ZM20 19.5V22H19C17.8954 22 17 22.8954 17 24V29C17 30.1046 17.8954 31 19 31H28C29.1046 31 30 30.1046 30 29V24C30 22.8954 29.1046 22 28 22H27V19.5C27 17.567 25.433 16 23.5 16C21.567 16 20 17.567 20 19.5ZM19 24V29H28V24H19Z" fill="black"/>
  </SvgComponent>);
};
export default QISecurity;
