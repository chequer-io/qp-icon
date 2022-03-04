import { CommonSVGComponent, IconSize, NotUndefined, SVGElementProps } from '../typings';
declare type SVGWidthOrHeight = NotUndefined<SVGElementProps['width'] | SVGElementProps['height']>;
export declare const sizeMap: {
    [key in NotUndefined<IconSize>]: SVGWidthOrHeight;
};
declare const SvgComponent: CommonSVGComponent;
export default SvgComponent;
//# sourceMappingURL=SvgComponent.d.ts.map