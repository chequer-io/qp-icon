import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QIIconEye: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5C22.31 5 28.73 9.58002 30.94 15.66C31.02 15.88 31.02 16.12 30.94 16.34C28.73 22.42 22.31 27 16 27C9.69002 27 3.27003 22.42 1.06001 16.34C0.979996 16.12 0.979996 15.88 1.06001 15.66C3.27003 9.58002 9.69002 5 16 5ZM3.07002 16C5.09999 21.07 10.7 25 16 25C21.3 25 26.9 21.07 28.93 16C26.9 10.93 21.3 7 16 7C10.7 7 5.09999 10.93 3.07002 16ZM10 16C10 12.69 12.69 10 16 10C19.31 10 22 12.69 22 16C22 19.31 19.31 22 16 22C12.69 22 10 19.31 10 16ZM12 16C12 18.21 13.79 20 16 20C18.21 20 20 18.21 20 16C20 13.79 18.21 12 16 12C13.79 12 12 13.79 12 16Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIIconEye;
