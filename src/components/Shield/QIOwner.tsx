import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIOwner: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6.66667L4.00002 14.8333C4.00002 21.9577 9.11998 28.3826 16 30C22.88 28.3826 28 21.9577 28 14.8333V6.66667C28 6.66667 23.2754 5.98629 21.4545 5.23078C19.5349 4.43431 16 2 16 2C16 2 12.465 4.43431 10.5454 5.23078C8.72455 5.98629 4 6.66667 4 6.66667ZM15.5293 9.30451C15.7202 8.89849 16.2798 8.8985 16.4707 9.30452L18.3458 13.2921L22.5525 13.9346C22.9794 13.9998 23.1509 14.5409 22.8441 14.8546L19.7945 17.9724L20.5139 22.3675C20.5864 22.8105 20.1351 23.1466 19.7515 22.9352L16 20.8671L12.2484 22.9352C11.8649 23.1466 11.4136 22.8105 11.4861 22.3675L12.2055 17.9724L9.15591 14.8546C8.84912 14.5409 9.0206 13.9998 9.44744 13.9346L13.6542 13.2921L15.5293 9.30451Z"
      fill="#656C72"
    />
  </SvgComponent>
);
