import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Palette from '@/stories/Palette';

export const paletteFactory = (): ComponentStory<typeof Palette> => args =>
  <Palette {...args} />;

const defaultMeta: ComponentMeta<typeof Palette> = {
  component: Palette,
  argTypes: {
    icons: {
      table: {
        disable: true,
      },
    },
    pageTitle: {
      table: {
        disable: true,
      },
    },
    isExpand: {
      name: 'Expand',
      description: `false일 경우 "1em" 사이즈 아이콘만 표시`,
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
    },
  },
};
export const getStoryBase = (subTitle?: string) => ({
  ...defaultMeta,
  title: `querypie-icon${subTitle ? `/${subTitle}` : ''}`,
});
