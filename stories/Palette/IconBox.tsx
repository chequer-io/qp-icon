import { CSSProperties, FC } from 'react';
import styles from '@stories/Palette/styles.module.css';
import { sizeMap } from '@common/SvgComponent';

type Size = CustomizedSVGComponentProps['size'];
const iconSizes: NotUndefined<Size>[] = [
  'tiny',
  'small',
  'regular',
  'medium',
  'large',
];

type IconBoxProps = {
  Icon: CustomizedSVGComponent;
  backgroundColor: CSSProperties['backgroundColor'];
  isExpand: boolean;
};
const IconBox: FC<IconBoxProps> = ({ Icon, backgroundColor, isExpand }) => {
  const label = Icon.name;

  if (!isExpand) {
    return (
      <section className={styles['icon-gallery__box']}>
        <article className={styles['icon-gallery__box__content']}>
          <Icon />
        </article>
      </section>
    );
  }
  return (
    <article className={styles['icon-gallery__box']}>
      <p className={styles['icon-gallery__box__label']}>{label}</p>

      <section className={styles['icon-gallery__box__content']}>
        <article className={styles['icon-gallery__box__icons-container']}>
          {iconSizes.map(size => (
            <section
              title={size}
              key={`${label}--icon-${size}`}
              className={styles['icon-gallery__box__icon-wrapper']}
            >
              <Icon size={size} style={{ backgroundColor }} />
            </section>
          ))}
        </article>

        <article>
          {iconSizes.map(size => (
            <section
              title={size}
              key={`${label}--icon-text-${size}`}
              style={{ fontSize: sizeMap[size] }}
              className={styles['icon-gallery__box__icon-text']}
            >
              <Icon size={size} style={{ backgroundColor }} /> {size} text
            </section>
          ))}
        </article>
      </section>
    </article>
  );
};

export default IconBox;
