import styles from '@common/SvgComponent.module.css';
import type { SVGProps } from 'react';

type IconSize = NotUndefined<CommonSVGComponentProps['size']>;
type SVGElementProps = SVGProps<SVGSVGElement>;
type SVGWidthOrHeight = NotUndefined<
  SVGElementProps['width'] | SVGElementProps['height']
>;

export const sizeMap: { [key in IconSize]: SVGWidthOrHeight } = {
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
  className,
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
      className={`${styles.SvgComponent} ${className}`}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default SvgComponent;
