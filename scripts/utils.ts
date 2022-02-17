import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { execSync } from 'child_process';

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
const tree = ${jsonTree};

export default tree;
  `.trim() + '\r\n';

type CreateSvgTreeProps = {
  targetDir: string;
  treeFilename: string;
};
export const createSvgTree = async ({
  targetDir,
  treeFilename,
}: CreateSvgTreeProps) => {
  const svgTree = dirTree(targetDir, {
    extensions: /\.svg/,
    attributes: ['type'],
  });
  const svgJsonTree = JSON.stringify(svgTree, null, '\t');
  await makeFile(`${targetDir}/${treeFilename}`, getTreeFileBody(svgJsonTree));
};

type ExtractReactComponentsFromSvgFilesProps = {
  sourceDir: string;
  targetDir: string;
  svgrTemplateFilename: string;
};
export const extractReactComponentsFromSvgFiles = ({
  sourceDir,
  targetDir,
  svgrTemplateFilename,
}: ExtractReactComponentsFromSvgFilesProps) => {
  const filenameExceptExtension = svgrTemplateFilename.replace(/\.tsx$/, '');
  execSync(
    `
tsc ${filenameExceptExtension}.ts \
&& \
npx @svgr/cli \
--icon \
--typescript \
--template ${filenameExceptExtension}.js \
--out-dir ${sourceDir} -- ${targetDir} \
&& \
rm ${filenameExceptExtension}.js
  `.trim(),
  );
};

type ComponentsImportsMap = {
  [dirPath: string]: {
    name: string;
    componentNames: string[];
  };
};
type CreateComponentTreeProps = {
  targetDir: string;
  treeFilename: string;
};
export const createComponentTree = async ({
  targetDir,
  treeFilename,
}: CreateComponentTreeProps): Promise<ComponentsImportsMap> => {
  const componentImportsMap: ComponentsImportsMap = {};

  const onEachDirectory: DirectoryTreeCallback = (item, path) => {
    const childFiles = item.children?.filter(child => child.type === 'file');
    const hasChildFile = childFiles && childFiles.length !== 0;

    if (!hasChildFile) return;

    const isRootDir = item.name === targetDir;
    componentImportsMap[path] = {
      name: isRootDir ? 'root' : item.name,
      componentNames: childFiles.map(file => file.name.replace('.tsx', '')),
    };
  };

  const componentsTree = dirTree(
    targetDir,
    {
      extensions: /\.tsx/,
      attributes: ['type'],
    },
    undefined,
    onEachDirectory,
  );
  const componentsJsonTree = JSON.stringify(componentsTree, null, '\t');
  await makeFile(
    `${targetDir}/${treeFilename}`,
    getTreeFileBody(componentsJsonTree),
  );

  return componentImportsMap;
};

type CreateStoryProps = {
  targetDir: string;
  componentImportsMap: ComponentsImportsMap;
  storyFilename?: string;
};
export const createStory = async ({
  targetDir,
  componentImportsMap,
}: CreateStoryProps) => {
  const importsMapArr = Object.entries(componentImportsMap);

  const fileBody =
    `
import React from 'react';
import { getStoryBase, paletteFactory } from '@stories/StoryBase';
${importsMapArr.reduceRight((acc, [dirPath, { componentNames }]) => {
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

  await makeFile(`${targetDir}/Icons.stories.tsx`, fileBody);
};
