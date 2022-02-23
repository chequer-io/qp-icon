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
  const sortedImportsMapArr = Object.entries(importsMap).sort(
    ([dirnameA], [dirnameB]) => {
      if (dirnameA < dirnameB) {
        return -1;
      }
      if (dirnameA > dirnameB) {
        return 1;
      }
      return 0;
    },
  );
  const willImportedComponents = sortedImportsMapArr
    .flatMap(([, componentNames]) => componentNames)
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
  pageTitle: 'All Icons',
  icons: [${willImportedComponents}],
};
  `.trim();

  const categoriesFile = `
${getFileHeader({ subTitle: 'categories' })}

${sortedImportsMapArr.reduce((acc, [dirName, componentNames]) => {
  const categoryName = dirName.toLowerCase().replace(/(-|_|icons?$)/gi, '');

  const story = `
export const ${categoryName} = paletteFactory();
${categoryName}.args = {
  pageTitle: '${toPascalCase(categoryName)} Icons',
  icons: [${componentNames.join(', ')}],
};
  `.trim();

  return acc + story + '\r\n\r\n';
}, '')}
  `.trim();

  await makeFile(`${storyDir}/Icon.stories.tsx`, rootFile);
  await makeFile(`${storyDir}/IconCategories.stories.tsx`, categoriesFile);
}
