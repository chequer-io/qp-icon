import type { FC, SVGProps } from 'react';

type SVGElementProps = SVGProps<SVGSVGElement>;

type IconSizeShort = 'S' | 'M' | 'L' | 'XL';
type IconSizeLong = 'small' | 'medium' | 'large' | 'extraLarge';
type IconSize = IconSizeShort | IconSizeLong | 'responsive';

type SizeAffectStyleProps = 'width' | 'height' | 'viewBox';
interface CustomizedSvgProps {
  /**
   * @default: 'responsive'
   *
   * S_small: 16
   *
   * M_medium: 20
   *
   * L_large: 24
   *
   * XL_extraLarge: 32
   *
   * responsive: '1em'
   */
  size?: IconSize;

  /**
   * @default: {}
   */
  style?: Omit<SVGProps<SVGSVGElement>['style'], SizeAffectStyleProps>;
}

type FilteredSvgElementProps = Omit<
  SVGElementProps,
  SizeAffectStyleProps | keyof CustomizedSvgProps
>;

export interface CustomizedSVGComponentProps
  extends CustomizedSvgProps,
    FilteredSvgElementProps {}
export type CustomizedSVGComponent = FC<CustomizedSVGComponentProps>;

export interface CommonSVGComponentProps extends CustomizedSVGComponentProps {
  viewBox: SVGProps<SVGSVGElement>['viewBox'];
}
export type CommonSVGComponent = FC<CommonSVGComponentProps>;

export type NotUndefined<T> = T extends undefined ? never : T;
