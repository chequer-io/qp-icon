import styles from '@common/SvgComponent.module.css';
import type { SVGProps } from 'react';

type Size = NotUndefined<CommonSVGComponentProps['size']>;
type SVGElementProps = SVGProps<SVGSVGElement>;
type SVGWidthOrHeight = NotUndefined<
  SVGElementProps['width'] | SVGElementProps['height']
>;

export const sizeMap: { [key in Size]: SVGWidthOrHeight } = {
  tiny: 9,
  small: 12,
  regular: 15,
  medium: 20,
  large: 24,
  responsive: '1em',
};

const SvgComponent: CommonSVGComponent = ({
  size = 'responsive',
  style = {},
  viewBox,
  children,
}) => {
  const iconSize = sizeMap[size];

  return (
    <svg
      viewBox={viewBox}
      style={style}
      width={iconSize}
      height={iconSize}
      className={styles.SvgComponent}
    >
      {children}
    </svg>
  );
};

export default SvgComponent;
