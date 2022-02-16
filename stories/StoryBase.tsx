import type { FC } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './StoryBase.module.css';

interface PaletteProps {
  icons: FC<any>[];
}

const iconSizes = [16, 24, 32];

export const Palette = ({ icons }: PaletteProps) => (
  <section className={styles.Palette}>
    {icons.map((Icon) => (
      <article key={Icon.displayName} className={styles['icon-box']}>
        <div className={styles['icon-box__icons-wrapper']}>
          {iconSizes.map((size) => (
            <Icon key={`${Icon.displayName}-${size}`} width={size} height={size} />
          ))}
        </div>
        <p className={styles['icon-box__label']}>{Icon.displayName}</p>
      </article>
    ))}
  </section>
);

export const paletteFactory = (): ComponentStory<typeof Palette> => (args) => (
  <Palette {...args} />
);

const defaultMeta: ComponentMeta<typeof Palette> = {
  title: `querypie-icon`,
  component: Palette,
  argTypes: {},
};
export const getStoryBase = (appendMeta: ComponentMeta<typeof Palette> = {}) => ({
  ...defaultMeta,
  appendMeta,
});
