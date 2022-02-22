import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Palette from '@stories/Palette';

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
    isExpand: {
      name: '확장',
      description: `true로 설정 시 모든 사이즈와 이름 표시, false일 경우 "1em" 사이즈 아이콘만 표시`,
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
    },
    backgroundColor: {
      name: '배경 색상',
      description: '아이콘 배경 색상 변경',
      type: 'string',
      control: 'color',
      defaultValue: '#ffffff',
    },
  },
};
export const getStoryBase = (subTitle?: string) => ({
  ...defaultMeta,
  title: `querypie-icon${subTitle ? `/${subTitle}` : ''}`,
});
