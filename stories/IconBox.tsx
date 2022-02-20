import { CSSProperties, FC } from 'react';
import styles from '@stories/styles.module.css';

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
      <article className={styles['icon-gallery__box']}>
        <section
          style={{ backgroundColor }}
          className={styles['icon-gallery__box__icons-wrapper']}
        >
          <Icon />
        </section>
      </article>
    );
  }
  return (
    <article className={styles['icon-gallery__box']}>
      <section
        style={{ backgroundColor }}
        className={styles['icon-gallery__box__icons-wrapper']}
      >
        {iconSizes.map(size => (
          <section title={size} key={`${label}--${size}`}>
            <Icon size={size} />
          </section>
        ))}
      </section>
      <p className={styles['icon-gallery__box__label']}>{label}</p>
    </article>
  );
};

export default IconBox;
