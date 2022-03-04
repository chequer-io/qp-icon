import * as React from 'react';
import {
  CommonSVGComponent,
  IconSize,
  NotUndefined,
  SVGElementProps,
} from '../typings';

type SVGWidthOrHeight = NotUndefined<
  SVGElementProps['width'] | SVGElementProps['height']
>;

export const sizeMap: { [key in NotUndefined<IconSize>]: SVGWidthOrHeight } = {
  S: 16,
  M: 20,
  L: 24,
  XL: 32,
  small: 16,
  medium: 20,
  large: 24,
  extraLarge: 32,
  responsive: '1em',
};

const SvgComponent: CommonSVGComponent = ({
  size = 'responsive',
  style = {},
  viewBox,
  children,
  ...rest
}) => {
  const iconSize = sizeMap[size];

  return (
    <svg
      viewBox={viewBox}
      style={style}
      width={iconSize}
      height={iconSize}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default SvgComponent;
