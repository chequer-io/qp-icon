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
var QIDBImpala = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M18.8815 3.34485C19.032 3.52651 19.1649 3.70425 19.3058 3.89308C21.1402 6.35177 21.6915 9.29674 21.1577 12.2957C21.1238 12.4864 21.0233 12.4946 20.8808 12.632C20 13.482 19.152 14.3628 18.6255 15.4815C18.4042 15.9517 18.2918 16.4797 18.1841 16.9927C18.1519 17.1462 18.2613 17.4345 18.3817 17.487C18.5169 17.5459 18.8008 17.4655 18.9112 17.3456C19.4725 16.7356 20.0131 16.1047 20.5321 15.458C20.8862 15.0168 21.193 14.5375 21.5544 14.0916C21.6521 15.0673 21.6351 16.0263 21.1881 16.9007C21 17.4576 20.7576 17.5235 20.4551 17.859C20.1109 18.1171 19.7144 18.5097 19.4707 18.8374C19.09 19.4477 19.1102 19.9408 19.6808 20.3683C19.7167 20.3902 19.9047 20.4803 19.9656 20.4938C19.8365 20.5802 19.7229 20.6083 19.4272 20.6943C19.4166 21.1377 19.0471 21.4333 18.9391 21.6405C18.888 21.8392 18.8689 21.8692 18.8527 22.0907C18.7133 23.9964 18.4318 26.0586 17.723 27.8521C17.4833 28.4584 17.1945 28.8381 16.5944 29.0895C16.5226 29.1196 16.1863 29.294 16.1431 29.3032C16.2908 29.0686 16.3188 28.7221 16.1231 28.4562C15.9826 28.2653 15.4219 28.276 15.2406 28.1014C15.2751 28.0935 15.5157 28.1117 15.5499 28.1128C15.8358 28.1226 16.1063 28.1082 16.1902 27.7561C16.2574 27.4738 16.1071 27.1918 15.8226 26.9939C15.6293 26.8593 15.4959 26.8211 15.3308 26.6526C15.2909 26.6119 15.2306 26.3877 15.2724 26.2398C15.2736 26.2352 15.276 26.231 15.2793 26.2275C15.2826 26.2241 15.2867 26.2215 15.2913 26.2202C15.2959 26.2188 15.3007 26.2186 15.3054 26.2196C15.31 26.2207 15.3143 26.2229 15.3179 26.2261C15.5043 26.3932 15.7476 26.5703 15.9033 26.7565C16.0032 26.8479 16.1293 26.9529 16.2163 26.9518C16.3083 26.9506 16.3612 26.8388 16.4688 26.7629C16.7163 26.5426 16.8042 26.4353 16.96 26.1342C16.987 25.9686 16.9283 25.6875 16.8765 25.4835C16.6598 24.6301 16.5913 23.7422 16.814 22.886C16.9736 22.2723 17.202 21.6456 17.5428 21.117C18.088 20.2717 18.1132 19.4983 17.542 18.6887C16.5658 17.305 16.6781 15.9067 17.4691 14.4886C18.0328 13.478 18.758 12.5984 19.561 11.772C19.7272 11.601 19.8356 11.5835 19.8815 11.3494C20.4694 8.63933 20.1078 5.89098 18.8133 3.48105C18.756 3.37709 18.2722 2.70532 18.2648 2.66735C18.2801 2.65713 18.8662 3.35508 18.8814 3.34485H18.8815ZM13.5875 17.9995C13.5562 17.6032 13.5523 17.2292 13.4932 16.8641C13.2574 15.407 12.485 14.2344 11.4988 13.1805C11.4205 13.0967 11.3482 13.0019 11.2553 12.9381C10.7627 12.6001 10.6125 12.103 10.5487 11.5418C10.1932 8.41413 10.9879 5.63998 13.0659 3.25372C13.0797 3.2378 13.4911 2.70102 13.5582 2.67452C12.9755 3.69002 12.2821 4.6819 11.9532 6.3793C11.6348 8.02268 11.6314 9.65252 11.9752 11.2844C12.0103 11.451 12.1325 11.6167 12.2542 11.7449C13.1173 12.6534 13.9299 13.6059 14.4251 14.7663C14.6627 15.3227 14.8228 15.9341 14.8916 16.535C14.985 17.3502 14.4793 17.8752 13.5876 17.9995H13.5875ZM12.7101 20.5646C13.4977 20.0406 14.0818 20.2034 14.4114 20.9175C14.762 21.6771 14.9849 22.7725 15.0234 23.6096C14.825 23.1244 14.5495 22.3557 14.3561 21.8685C14.2651 21.6395 14.1451 21.4731 13.8635 21.4782C13.6003 21.483 13.4267 21.3289 13.3697 21.0824C13.3436 20.9691 13.3122 20.7994 13.2435 20.7227C13.1289 20.5949 12.9396 20.5924 12.7101 20.5646V20.5646ZM12.4354 18.0738C11.4075 17.3858 10.6639 16.5043 10.5231 15.1904C11.0888 15.4331 12.1148 16.9594 12.4355 18.0738H12.4354Z" fill="#2C6791"/>
  </SvgComponent>);
};
export default QIDBImpala;
