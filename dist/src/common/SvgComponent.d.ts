import type { SVGProps } from 'react';
import type { CommonSVGComponent, CommonSVGComponentProps, NotUndefined } from '../../typings';
declare type IconSize = NotUndefined<CommonSVGComponentProps['size']>;
declare type SVGElementProps = SVGProps<SVGSVGElement>;
declare type SVGWidthOrHeight = NotUndefined<SVGElementProps['width'] | SVGElementProps['height']>;
export declare const sizeMap: {
    [key in IconSize]: SVGWidthOrHeight;
};
declare const SvgComponent: CommonSVGComponent;
export default SvgComponent;
