import type { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './StoryBase.module.css';

interface PaletteProps {
  icons: CustomizedSVGComponent[];
}

const iconSizes: CustomizedSVGComponentProps['size'][] = [
  'tiny',
  'small',
  'regular',
  'medium',
  'large',
];

export const Palette = ({ icons }: PaletteProps) => (
  <section className={styles.Palette}>
    {icons.map(Icon => (
      <article key={Icon.displayName} className={styles['icon-box']}>
        <div className={styles['icon-box__icons-wrapper']}>
          {iconSizes.map(size => (
            <Icon key={`${Icon.displayName}--${size}`} size={size} />
          ))}
        </div>
        <p className={styles['icon-box__label']}>{Icon.displayName}</p>
      </article>
    ))}
  </section>
);

export const paletteFactory = (): ComponentStory<typeof Palette> => args =>
  <Palette {...args} />;

const defaultMeta: ComponentMeta<typeof Palette> = {
  title: `querypie-icon`,
  component: Palette,
  argTypes: {},
};
export const getStoryBase = (
  appendMeta: ComponentMeta<typeof Palette> = {},
) => ({
  ...defaultMeta,
  appendMeta,
});
