import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { transform } from '@svgr/core';

export const checkOrCreateDir = async (dirPath: string | string[]) => {
  const checkOrCreate = (path: string) => {
    if (!existsSync(path)) {
      mkdirSync(path);
    }
  };

  try {
    if (Array.isArray(dirPath)) {
      dirPath.forEach(v => checkOrCreate(v));
      return;
    }
    checkOrCreate(dirPath);
  } catch (error) {
    throw new Error(`Error while checkOrCreateDir()`);
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
  await checkOrCreateDir(targetDir);

  const svgTree = dirTree(targetDir, {
    extensions: /\.svg/,
    attributes: ['type'],
  });
  const svgJsonTree = JSON.stringify(svgTree, null, '\t');

  await makeFile(`${targetDir}/${treeFilename}`, getTreeFileBody(svgJsonTree));
};

type ComponentsImportsMap = {
  [dirPath: string]: {
    name: string;
    componentNames: string[];
  };
};
type BuildReactComponentsFromSvgFilesProps = {
  sourceDir: string;
  targetDir: string;
  treeFilename: string;
};
export const buildReactComponentsFromSvgFiles = async ({
  sourceDir,
  targetDir,
  treeFilename,
}: BuildReactComponentsFromSvgFilesProps): Promise<ComponentsImportsMap> => {
  const componentImportsMap: ComponentsImportsMap = {};

  const onEachFile: DirectoryTreeCallback = async (item, path) => {
    try {
      const svgPath = path
        .replace(targetDir, sourceDir)
        .replace(/\.tsx$/, '.svg');
      const svgCode = await readFile(svgPath, { encoding: 'utf8', flag: 'r' });

      const componentCode = await transform(
        svgCode,
        {
          icon: true,
          typescript: true,
        },
        { componentName: item.name.replace(/\.tsx$/, '') },
      );

      await makeFile(path, componentCode);
    } catch (err) {
      console.error(err);
    }
  };

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
    onEachFile,
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
