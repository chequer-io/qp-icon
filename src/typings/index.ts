import { FC, SVGProps } from 'react';

export type SVGElementProps = SVGProps<SVGSVGElement>;

export type CustomizedSVGComponentProps = Omit<SVGElementProps, 'viewBox'>;
export type CustomizedSVGComponent = FC<CustomizedSVGComponentProps>;

export interface CommonSVGComponentProps extends CustomizedSVGComponentProps {
  viewBox: SVGProps<SVGSVGElement>['viewBox'];
}
export type CommonSVGComponent = FC<CommonSVGComponentProps>;
