import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { execSync } from 'child_process';
import {
  COMPONENT_DIR,
  STORY_DIR,
  SVG_DIR,
  SVR_TEMPLATE_FILENAME,
  TREE_FILENAME,
} from '@scripts/generate';

export const checkDir = async (dirPath: string) => {
  try {
    existsSync(dirPath);
  } catch (error) {
    throw new Error(`directory [${dirPath}] is not exist`);
  }
};

export const makeFile = async (filename: string, body: string) => {
  const data = new Uint8Array(Buffer.from(body));

  try {
    await writeFile(filename, data);
  } catch (error) {
    throw new Error(`Error while generating the file [${filename}]`);
  }
};

export const getTreeFileBody = (jsonTree: string) =>
  `
// === made by querypie front-end team
const tree = ${jsonTree};

export default tree;
`.trim() + '\r\n';

export const createSvgTree = async () => {
  const svgTree = dirTree(SVG_DIR, {
    extensions: /\.svg/,
    attributes: ['type'],
  });
  const svgJsonTree = JSON.stringify(svgTree, null, '\t');
  await makeFile(`${SVG_DIR}/${TREE_FILENAME}`, getTreeFileBody(svgJsonTree));
};

export const extractReactComponentsFromSvgFiles = () => {
  const TEMPLATE_EXCEPT_EXT = SVR_TEMPLATE_FILENAME.replace(/\.tsx$/, '');
  execSync(
    `
tsc ${TEMPLATE_EXCEPT_EXT}.ts \
&& \
npx @svgr/cli \
--icon \
--typescript \
--template ${TEMPLATE_EXCEPT_EXT}.js \
--out-dir ${COMPONENT_DIR} -- ${SVG_DIR} \
&& \
rm ${TEMPLATE_EXCEPT_EXT}.js
  `.trim(),
  );
};

type ComponentsImportsMap = {
  [dirPath: string]: {
    name: string;
    componentNames: string[];
  };
};
export const createComponentTree = async (): Promise<ComponentsImportsMap> => {
  const componentImportsMap: ComponentsImportsMap = {};

  const onEachDirectory: DirectoryTreeCallback = (item, path) => {
    const childFiles = item.children?.filter(child => child.type === 'file');
    const hasChildFile = childFiles && childFiles.length !== 0;

    if (!hasChildFile) return;

    const isRootDir = item.name === COMPONENT_DIR;
    componentImportsMap[path] = {
      name: isRootDir ? 'root' : item.name,
      componentNames: childFiles.map(file => file.name.replace('.tsx', '')),
    };
  };

  const componentsTree = dirTree(
    COMPONENT_DIR,
    {
      extensions: /\.tsx/,
      attributes: ['type'],
    },
    undefined,
    onEachDirectory,
  );
  const componentsJsonTree = JSON.stringify(componentsTree, null, '\t');
  await makeFile(
    `${COMPONENT_DIR}/${TREE_FILENAME}`,
    getTreeFileBody(componentsJsonTree),
  );

  return componentImportsMap;
};

export const createStory = async (
  componentImportsMap: ComponentsImportsMap,
) => {
  const importsMapArr = Object.entries(componentImportsMap);

  const fileBody =
    `
import React from 'react';
import { getStoryBase, paletteFactory } from '@stories/StoryBase';
${importsMapArr.reduce((acc, [dirPath, { componentNames }]) => {
  const importedComponents = componentNames.join(', ');
  const importLine = `import { ${importedComponents} } from '@${dirPath}'`;
  return acc + importLine + '\r\n';
}, '')}
const base = getStoryBase();
export default base;

${importsMapArr.reduce((acc, [_, { name, componentNames }]) => {
  const pascalCaseName = name
    .replace(/[a-zA-Z0-9]+/g, w => {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    })
    .replace(/[-_]/, '');
  const story = `
export const ${pascalCaseName} = paletteFactory();
${pascalCaseName}.args = {
  icons: [${componentNames.join(', ')}],
};
  `.trim();

  return acc + story + '\r\n\r\n';
}, '')}
  `.trim() + '\r\n';

  await makeFile(`${STORY_DIR}/Icon.stories.tsx`, fileBody);
};
