import React from 'react';
import {getStoryBase, paletteFactory} from '@stories/StoryBase';
import Temp from "@components/Temp";

const base = getStoryBase();
export default base;

export const Temp1 = paletteFactory();
Temp1.args = {
  icons: [Temp, Temp, Temp],
};

export const Temp2 = paletteFactory();
Temp2.args = {
  icons: [
    Temp, Temp, Temp, Temp,
    Temp, Temp, Temp, Temp,
    Temp, Temp, Temp, Temp,
    Temp, Temp, Temp
  ],
};
