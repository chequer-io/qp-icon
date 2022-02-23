import { FC, HTMLAttributes } from 'react';
import styles from '@stories/Palette/styles.module.css';

type Size = CustomizedSVGComponentProps['size'];
const iconSizes: NotUndefined<Size>[] = ['S', 'M', 'L', 'XL'];

interface IconBoxProps extends HTMLAttributes<HTMLElement> {
  Icon: CustomizedSVGComponent;
  isExpand: boolean;
}
const IconBox: FC<IconBoxProps> = ({ Icon, isExpand, ...rest }) => {
  const label = Icon.name;

  if (!isExpand) {
    return (
      <section className={styles['icon-gallery__box']} {...rest}>
        <article className={styles['icon-gallery__box__content']}>
          <Icon size="XL" />
        </article>
      </section>
    );
  }
  return (
    <article className={styles['icon-gallery__box']}>
      <p className={styles['icon-gallery__box__label']}>{label}</p>

      <section className={styles['icon-gallery__box__content']} {...rest}>
        <article className={styles['icon-gallery__box__icons-container']}>
          {iconSizes.map(size => (
            <section
              title={size}
              key={`${label}--icon-${size}`}
              className={styles['icon-gallery__box__icon-wrapper']}
            >
              <Icon size={size} />
            </section>
          ))}
        </article>

        {/*<article>*/}
        {/*  {iconSizes.map(size => (*/}
        {/*    <section*/}
        {/*      title={size}*/}
        {/*      key={`${label}--icon-text-${size}`}*/}
        {/*      style={{ fontSize: sizeMap[size] }}*/}
        {/*      className={styles['icon-gallery__box__icon-text']}*/}
        {/*    >*/}
        {/*      <Icon size={size} style={{ backgroundColor }} /> {size} Text*/}
        {/*    </section>*/}
        {/*  ))}*/}
        {/*</article>*/}
      </section>
    </article>
  );
};

export default IconBox;
