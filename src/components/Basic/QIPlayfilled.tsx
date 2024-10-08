import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPlayfilled: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M6 28.0015C5.82 28.0015 5.65 27.9515 5.49 27.8615C5.19 27.6815 5 27.3515 5 27.0015V5.00148C5 4.65148 5.19 4.32148 5.49 4.14148C5.79 3.96148 6.17 3.95148 6.48 4.12148L26.48 15.1215C26.8 15.3015 27 15.6315 27 16.0015C27 16.3715 26.8 16.7015 26.48 16.8815L6.48 27.8815C6.33 27.9615 6.16 28.0015 6 28.0015Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
