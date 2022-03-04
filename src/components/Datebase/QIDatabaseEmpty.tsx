import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../typings';

export const QIDatabaseEmpty: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0821 2.01329C15.385 2.00448 15.6911 2 16 2C16.3089 2 16.615 2.00448 16.9179 2.01329C17.4699 2.02934 17.9044 2.48988 17.8884 3.04193C17.8723 3.59398 17.4118 4.0285 16.8597 4.01245C16.5763 4.0042 16.2895 4 16 4C15.7105 4 15.4237 4.0042 15.1403 4.01245C14.5882 4.0285 14.1277 3.59398 14.1116 3.04193C14.0956 2.48988 14.5301 2.02934 15.0821 2.01329ZM20.3168 3.29723C20.4252 2.75569 20.9521 2.40457 21.4936 2.51298C22.1339 2.64117 22.7418 2.79181 23.3093 2.96307C23.838 3.12263 24.1373 3.68061 23.9777 4.20934C23.8182 4.73807 23.2602 5.03735 22.7315 4.87779C22.2308 4.72669 21.6852 4.59102 21.101 4.47407C20.5595 4.36566 20.2084 3.83877 20.3168 3.29723ZM11.6832 3.29723C11.7916 3.83877 11.4405 4.36566 10.899 4.47407C10.3148 4.59102 9.76922 4.72669 9.26855 4.87779C8.73981 5.03735 8.18184 4.73807 8.02228 4.20934C7.86272 3.68061 8.16199 3.12263 8.69073 2.96307C9.25824 2.79181 9.86607 2.64117 10.5064 2.51299C11.0479 2.40457 11.5748 2.75569 11.6832 3.29723ZM26.2478 5.29613C26.7236 5.01567 27.3366 5.17401 27.6171 5.64978C27.8548 6.053 28 6.50825 28 7C28 7.49175 27.8548 7.947 27.6171 8.35022C27.3366 8.82599 26.7236 8.98433 26.2478 8.70387C25.772 8.42341 25.6137 7.81037 25.8942 7.33459C25.9767 7.19461 26 7.08622 26 7C26 6.91378 25.9767 6.80538 25.8942 6.66541C25.6137 6.18963 25.772 5.57659 26.2478 5.29613ZM5.75218 5.29613C6.22796 5.57659 6.3863 6.18963 6.10584 6.66541C6.02333 6.80538 6 6.91378 6 7C6 7.08622 6.02333 7.19461 6.10584 7.33459C6.3863 7.81037 6.22796 8.42341 5.75218 8.70387C5.27641 8.98433 4.66336 8.82599 4.3829 8.35022C4.14522 7.947 4 7.49175 4 7C4 6.50825 4.14522 6.053 4.3829 5.64978C4.66336 5.17401 5.27641 5.01567 5.75218 5.29613ZM5 11.1429C5.55228 11.1429 6 11.5906 6 12.1429V13.8571C6 14.4094 5.55228 14.8571 5 14.8571C4.44772 14.8571 4 14.4094 4 13.8571V12.1429C4 11.5906 4.44772 11.1429 5 11.1429ZM27 11.1429C27.5523 11.1429 28 11.5906 28 12.1429V13.8571C28 14.4094 27.5523 14.8571 27 14.8571C26.4477 14.8571 26 14.4094 26 13.8571V12.1429C26 11.5906 26.4477 11.1429 27 11.1429ZM5 17.1429C5.55228 17.1429 6 17.5906 6 18.1429V19.8571C6 20.4094 5.55228 20.8571 5 20.8571C4.44772 20.8571 4 20.4094 4 19.8571V18.1429C4 17.5906 4.44772 17.1429 5 17.1429ZM27 17.1429C27.5523 17.1429 28 17.5906 28 18.1429V19.8571C28 20.4094 27.5523 20.8571 27 20.8571C26.4477 20.8571 26 20.4094 26 19.8571V18.1429C26 17.5906 26.4477 17.1429 27 17.1429ZM5 23.1429C5.55228 23.1429 6 23.5906 6 24.1429V25C6 25.0862 6.02333 25.1946 6.10584 25.3346C6.3863 25.8104 6.22796 26.4234 5.75218 26.7039C5.27641 26.9843 4.66336 26.826 4.3829 26.3502C4.14522 25.947 4 25.4918 4 25V24.1429C4 23.5906 4.44772 23.1429 5 23.1429ZM27 23.1429C27.5523 23.1429 28 23.5906 28 24.1429V25C28 25.4918 27.8548 25.947 27.6171 26.3502C27.3366 26.826 26.7236 26.9843 26.2478 26.7039C25.772 26.4234 25.6137 25.8104 25.8942 25.3346C25.9767 25.1946 26 25.0862 26 25V24.1429C26 23.5906 26.4477 23.1429 27 23.1429ZM8.02228 27.7907C8.18184 27.2619 8.73981 26.9627 9.26855 27.1222C9.76922 27.2733 10.3148 27.409 10.899 27.5259C11.4405 27.6343 11.7916 28.1612 11.6832 28.7028C11.5748 29.2443 11.0479 29.5954 10.5064 29.487C9.86607 29.3588 9.25824 29.2082 8.69073 29.0369C8.16199 28.8774 7.86272 28.3194 8.02228 27.7907ZM23.9777 27.7907C24.1373 28.3194 23.838 28.8774 23.3093 29.0369C22.7418 29.2082 22.1339 29.3588 21.4936 29.487C20.9521 29.5954 20.4252 29.2443 20.3168 28.7028C20.2084 28.1612 20.5595 27.6343 21.101 27.5259C21.6852 27.409 22.2308 27.2733 22.7315 27.1222C23.2602 26.9627 23.8182 27.2619 23.9777 27.7907ZM14.1116 28.9581C14.1277 28.406 14.5882 27.9715 15.1403 27.9876C15.4237 27.9958 15.7105 28 16 28C16.2895 28 16.5763 27.9958 16.8597 27.9876C17.4118 27.9715 17.8723 28.406 17.8884 28.9581C17.9044 29.5101 17.4699 29.9707 16.9179 29.9867C16.615 29.9955 16.3089 30 16 30C15.6911 30 15.385 29.9955 15.0821 29.9867C14.5301 29.9707 14.0956 29.5101 14.1116 28.9581ZM23.9777 9.79066C24.1373 10.3194 23.838 10.8774 23.3093 11.0369C22.7418 11.2082 22.1339 11.3588 21.4936 11.487C20.9521 11.5954 20.4252 11.2443 20.3168 10.7028C20.2084 10.1612 20.5595 9.63434 21.101 9.52593C21.6852 9.40898 22.2308 9.27331 22.7315 9.12221C23.2602 8.96265 23.8182 9.26193 23.9777 9.79066ZM8.02228 9.79066C8.18184 9.26193 8.73981 8.96265 9.26855 9.12221C9.76922 9.27331 10.3148 9.40898 10.899 9.52593C11.4405 9.63434 11.7916 10.1612 11.6832 10.7028C11.5748 11.2443 11.0479 11.5954 10.5064 11.487C9.86607 11.3588 9.25824 11.2082 8.69073 11.0369C8.16199 10.8774 7.86272 10.3194 8.02228 9.79066ZM14.1116 10.9581C14.1277 10.406 14.5882 9.9715 15.1403 9.98755C15.4237 9.9958 15.7105 10 16 10C16.2895 10 16.5763 9.9958 16.8597 9.98755C17.4118 9.9715 17.8723 10.406 17.8884 10.9581C17.9044 11.5101 17.4699 11.9707 16.9179 11.9867C16.615 11.9955 16.3089 12 16 12C15.6911 12 15.385 11.9955 15.0821 11.9867C14.5301 11.9707 14.0956 11.5101 14.1116 10.9581ZM23.3093 20.037C23.838 19.8774 24.1373 19.3194 23.9777 18.7907C23.8182 18.262 23.2602 17.9627 22.7314 18.1223C22.2308 18.2733 21.6852 18.409 21.101 18.526C20.5595 18.6344 20.2084 19.1613 20.3168 19.7028C20.4252 20.2443 20.9521 20.5955 21.4936 20.4871C22.1339 20.3589 22.7418 20.2082 23.3093 20.037ZM9.26854 18.1223C8.73981 17.9627 8.18184 18.262 8.02228 18.7907C7.86272 19.3194 8.16199 19.8774 8.69072 20.037C9.25823 20.2082 9.86606 20.3589 10.5064 20.4871C11.0479 20.5955 11.5748 20.2443 11.6832 19.7028C11.7916 19.1613 11.4405 18.6344 10.899 18.526C10.3148 18.409 9.76922 18.2733 9.26854 18.1223ZM15.1402 18.9876C14.5882 18.9715 14.1277 19.4061 14.1116 19.9581C14.0956 20.5102 14.5301 20.9707 15.0821 20.9867C15.385 20.9956 15.6911 21 16 21C16.3089 21 16.615 20.9956 16.9179 20.9867C17.4699 20.9707 17.9044 20.5102 17.8884 19.9581C17.8723 19.4061 17.4118 18.9715 16.8597 18.9876C16.5763 18.9958 16.2895 19 16 19C15.7105 19 15.4237 18.9958 15.1402 18.9876Z"
      fill="black"
    />
  </SvgComponent>
);
