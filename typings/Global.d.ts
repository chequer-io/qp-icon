import type { FC, SVGProps } from 'react';

type SVGElementProps = SVGProps<SVGSVGElement>;

type IconSize =
  | 'tiny'
  | 'small'
  | 'regular'
  | 'medium'
  | 'large'
  | 'responsive';

type SizeAffectStyleProps = 'width' | 'height';

interface CustomizedSvgProps {
  /**
   * default: 'responsive'
   */
  size?: IconSize;

  /**
   * default: {}
   */
  style?: Omit<SVGProps<SVGSVGElement>['style'], SizeAffectStyleProps>;
}

type FilteredSvgElementProps = Omit<
  SVGElementProps,
  SizeAffectStyleProps | keyof CustomizedSvgProps
>;

declare global {
  declare interface CustomizedSVGComponentProps
    extends CustomizedSvgProps,
      FilteredSvgElementProps {}
  declare type CustomizedSVGComponent = FC<CustomizedSVGComponentProps>;

  declare interface CommonSVGComponentProps
    extends CustomizedSVGComponentProps {
    viewBox: SVGProps<SVGSVGElement>['viewBox'];
  }
  declare type CommonSVGComponent = FC<CommonSVGComponentProps>;

  declare type NotUndefined<T> = T extends undefined ? never : T;
}

declare module '*.module.css';