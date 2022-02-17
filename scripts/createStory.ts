import { makeFile, toPascalCase } from '@scripts/utils';
import type { ComponentImportsMap } from '@scripts/getComponentModuleInfoByComponentTree';

type CreateStoryProps = {
  componentDir: string;
  storyDir: string;
  importsMap: ComponentImportsMap;
};
export default async function createStory({
  componentDir,
  storyDir,
  importsMap,
}: CreateStoryProps) {
  const importsMapArr = Object.entries(importsMap);
  const willImportedComponents = importsMapArr
    .flatMap(([, componentNames]) => componentNames)
    .reverse()
    .join(', ');

  const fileBody =
    `
import React from 'react';
import { getStoryBase, paletteFactory } from '@stories/StoryBase';
import { ${willImportedComponents} } from '@${componentDir}';

const base = getStoryBase();
export default base;

${importsMapArr.reduceRight((acc, [dirName, componentNames]) => {
  const pascalCaseName = toPascalCase(dirName);
  const story = `
export const ${pascalCaseName} = paletteFactory();
${pascalCaseName}.args = {
  icons: [${componentNames.join(', ')}],
};
  `.trim();

  return acc + story + '\r\n\r\n';
}, '')}
  `.trim() + '\r\n';

  await makeFile(`${storyDir}/Icons.stories.tsx`, fileBody);
}
