import { FC, SVGProps } from 'react';

export type SVGElementProps = SVGProps<SVGSVGElement>;

type IconSizeShort = 'XS' | 'S' | 'M' | 'L' | 'XL';
type IconSizeLong = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
export type IconSize = IconSizeShort | IconSizeLong | 'responsive';

export type SizeAffectStyleProps = 'width' | 'height' | 'viewBox';
export interface CustomizedSvgProps {
  /**
   * @default: 'responsive'
   *
   * XS_extraSmall: 12
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

export type FilteredSvgElementProps = Omit<
  SVGElementProps,
  SizeAffectStyleProps | 'style'
>;

export type CustomizedSVGComponentProps = CustomizedSvgProps &
  FilteredSvgElementProps;
export type CustomizedSVGComponent = FC<CustomizedSVGComponentProps>;

export interface CommonSVGComponentProps extends CustomizedSVGComponentProps {
  viewBox: SVGProps<SVGSVGElement>['viewBox'];
}
export type CommonSVGComponent = FC<CommonSVGComponentProps>;

export type NotUndefined<T> = T extends undefined ? never : T;
