import { FC, HTMLAttributes, memo } from 'react';
import styles from '@stories/Palette/styles.module.css';
// import { sizeMap } from '@common/SvgComponent';

type Size = CustomizedSVGComponentProps['size'];
const iconSizes: NotUndefined<Size>[] = ['S', 'M', 'L', 'XL'];

interface IconBoxProps extends HTMLAttributes<HTMLElement> {
  Icon: CustomizedSVGComponent;
  isExpand: boolean;
  isClicked: boolean;
}
const IconBox: FC<IconBoxProps> = ({ Icon, isClicked, isExpand, ...rest }) => {
  const label = Icon.name;
  const boxClassname = `${styles['icon-gallery__box']} ${
    isClicked ? styles['icon-gallery__box--clicked'] : ''
  }`.trim();

  return (
    <article className={boxClassname} {...rest}>
      <section className={styles['icon-gallery__box__content']}>
        {!isExpand ? (
          <Icon size="XL" />
        ) : (
          <>
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
            {/*      <Icon size={size} /> {size} Text*/}
            {/*    </section>*/}
            {/*  ))}*/}
            {/*</article>*/}
          </>
        )}
      </section>

      <p className={styles['icon-gallery__box__label']}>{label}</p>
    </article>
  );
};

export default memo(IconBox);
