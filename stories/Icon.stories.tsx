import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconPalette } from './IconPalette';
import svgFiles from '../svg-files';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'querypie-icon',
  component: IconPalette,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconPalette>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconPalette> = args => (
  <IconPalette {...args} />
);

export const Base = Template.bind({});
Base.args = {
  files: svgFiles.base.files,
};


export const Arrows = Template.bind({});
Arrows.args = {
  files: svgFiles.arrows.files,
};
