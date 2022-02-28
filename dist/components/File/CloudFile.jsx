var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import SvgComponent from '../../common/SvgComponent';
var CloudFile = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 10C23 9.69995 22.9 9.5 22.7 9.30005L15.7 2.30005C15.5 2.09998 15.3 2 15 2H5C3.89999 2 3 2.90002 3 4V28C3 29.11 3.89001 30 5 30H9V28H5V4H13V10C13 11.1 13.9 12 15 12H21V16H23V10ZM15 10V4.40002L20.6 10H15ZM15.3827 28L15.2665 27.9898C13.9589 27.8745 13 26.8127 13 25.6C13 24.4661 13.8355 23.4659 15.016 23.2446L16.0887 23.0434L16.5 22.0325C16.9774 20.8591 18.1677 20 19.5909 20C21.1902 20 22.4882 21.0823 22.8231 22.4711L23.205 24.0553L24.8337 24.0012C24.8585 24.0004 24.8837 24 24.9091 24C26.1065 24 27 24.9375 27 26C27 27.0625 26.1065 28 24.9091 28H15.3827ZM11 25.6C11 27.8953 12.7973 29.7799 15.0909 29.982V30H17.0909H24.9091C27.1684 30 29 28.2092 29 26C29 23.7908 27.1684 22 24.9091 22C24.8616 22 24.8144 22.0008 24.7674 22.0023C24.2142 19.7078 22.1065 18 19.5909 18C17.3478 18 15.429 19.3578 14.6475 21.2788C12.5698 21.6684 11 23.4549 11 25.6Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default CloudFile;
