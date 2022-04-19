import { makeFile, toPascalCase } from './utils';
import { ComponentImportsMap } from './getComponentModuleInfoByComponentTree';
import getConfig from './getConfig';

type Props = {
  importsMap: ComponentImportsMap;
};
export default async function createStory({ importsMap }: Props) {
  const { dirname } = await getConfig();

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
import { getStoryBase, paletteFactory } from './StoryBase';
import { ${willImportedComponents} } from '../${dirname.src}';

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

  await makeFile(`${dirname.story}/Icon.stories.tsx`, rootFile);
  await makeFile(`${dirname.story}/IconCategories.stories.tsx`, categoriesFile);
}
