import { FC, SVGProps } from 'react';
export declare type SVGElementProps = SVGProps<SVGSVGElement>;
export declare type CustomizedSVGComponentProps = Omit<SVGElementProps, 'viewBox'>;
export declare type CustomizedSVGComponent = FC<CustomizedSVGComponentProps>;
export interface CommonSVGComponentProps extends CustomizedSVGComponentProps {
    viewBox: SVGProps<SVGSVGElement>['viewBox'];
}
export declare type CommonSVGComponent = FC<CommonSVGComponentProps>;
//# sourceMappingURL=index.d.ts.map