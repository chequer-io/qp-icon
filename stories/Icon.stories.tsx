import React from 'react';
import { getStoryBase, paletteFactory } from '@stories/StoryBase';
import { C, D } from '@components/one-depth/two_depth'
import { B } from '@components/one-depth'
import { A } from '@components'

const base = getStoryBase();
export default base;

export const TwoDepth = paletteFactory();
TwoDepth.args = {
  icons: [C, D],
};

export const OneDepth = paletteFactory();
OneDepth.args = {
  icons: [B],
};

export const Root = paletteFactory();
Root.args = {
  icons: [A],
};
