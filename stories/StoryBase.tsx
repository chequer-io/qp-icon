import type { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './StoryBase.module.css';
import { CSSProperties } from 'react';

type Size = CustomizedSVGComponentProps['size'];
const iconSizes: NotUndefined<Size>[] = [
  'tiny',
  'small',
  'regular',
  'medium',
  'large',
];

interface PaletteProps {
  icons: CustomizedSVGComponent[];
  backgroundColor: CSSProperties['backgroundColor'];
}

export const Palette = ({ icons, backgroundColor }: PaletteProps) => (
  <section className={styles.Palette}>
    {icons.map(Icon => (
      <article key={Icon.displayName} className={styles['icon-box']}>
        <section
          className={styles['icon-box__icons-wrapper']}
          style={{ backgroundColor }}
        >
          {iconSizes.map(size => (
            <section title={size} key={`${Icon.displayName}--${size}`}>
              <Icon size={size} />
            </section>
          ))}
        </section>
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
  argTypes: {
    icons: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      name: '배경 색상',
      description: '배경 색상',
      control: 'color',
      defaultValue: '#ffffff',
    },
  },
};
export const getStoryBase = (
  appendMeta: ComponentMeta<typeof Palette> = {},
) => ({
  ...defaultMeta,
  appendMeta,
});
