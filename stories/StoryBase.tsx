import { ComponentStory, ComponentMeta } from '@storybook/react';
import Palette from './Palette';
import '../src/styles.css';

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
    iconSize: {
      name: 'iconSize',
      description: '',
      type: 'number',
      control: {
        type: 'range',
        min: 5,
        max: 40,
      },
      defaultValue: 32,
    },
    color: {
      name: 'color',
      description: '',
      type: 'string',
      control: 'color',
      defaultValue: '#000',
    },
    backgroundColor: {
      name: 'backgroundColor',
      description: '',
      type: 'string',
      control: 'color',
      defaultValue: '#fff',
    },
  },
};
export const getStoryBase = (subTitle?: string) => ({
  ...defaultMeta,
  title: `qp-icon${subTitle ? `/${subTitle}` : ''}`,
});
