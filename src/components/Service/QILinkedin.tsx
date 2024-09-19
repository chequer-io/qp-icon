import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QILinkedin: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1" />
    <path
      d="M12.6186 9.69264C12.6186 10.6272 11.8085 11.3848 10.8093 11.3848C9.81004 11.3848 9 10.6272 9 9.69264C9 8.75809 9.81004 8.00049 10.8093 8.00049C11.8085 8.00049 12.6186 8.75809 12.6186 9.69264Z"
      fill="white"
    />
    <path d="M9.24742 12.6286H12.3402V22.0005H9.24742V12.6286Z" fill="white" />
    <path
      d="M17.3196 12.6286H14.2268V22.0005H17.3196C17.3196 22.0005 17.3196 19.0501 17.3196 17.2053C17.3196 16.0981 17.6977 14.986 19.2062 14.986C20.911 14.986 20.9008 16.435 20.8928 17.5576C20.8824 19.0249 20.9072 20.5223 20.9072 22.0005H24V17.0542C23.9738 13.8959 23.1508 12.4406 20.4433 12.4406C18.8354 12.4406 17.8387 13.1705 17.3196 13.831V12.6286Z"
      fill="white"
    />
  </SvgComponent>
);
