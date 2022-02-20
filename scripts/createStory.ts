import { makeFile, toPascalCase } from '@scripts/utils';
import type { ComponentImportsMap } from '@scripts/getComponentModuleInfoByComponentTree';

type Props = {
  componentDir: string;
  storyDir: string;
  importsMap: ComponentImportsMap;
};
export default async function createStory({
  componentDir,
  storyDir,
  importsMap,
}: Props) {
  const importsMapArr = Object.entries(importsMap);
  const willImportedComponents = importsMapArr
    .flatMap(([, componentNames]) => componentNames)
    .reverse()
    .join(', ');

  const getFileHeader = ({ subTitle = '' } = {}) =>
    `
import { getStoryBase, paletteFactory } from '@stories/StoryBase';
import { ${willImportedComponents} } from '@${componentDir}';

const base = getStoryBase('${subTitle}');
export default base;
  `.trim();

  const rootFile = `
${getFileHeader()}

export const All = paletteFactory();
All.args = {
  icons: [${willImportedComponents}],
};
  `.trim();

  const categoriesFile = `
${getFileHeader({ subTitle: 'categories' })}

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
  `.trim();

  await makeFile(`${storyDir}/IconRoot.stories.tsx`, rootFile);
  await makeFile(`${storyDir}/IconCategories.stories.tsx`, categoriesFile);
}
