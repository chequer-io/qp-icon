import { existsSync, mkdir, mkdirSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { transform } from '@svgr/core';
import path from 'path';

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
  const filePath = path.join(process.cwd(), filename);

  try {
    mkdir(path.dirname(filePath), { recursive: true }, () => {
      writeFile(filePath, body);
    });
  } catch (err) {
    console.error(err);
  }
};

export const toPascalCase = (name: string) =>
  name
    .replace(/[a-zA-Z0-9]+/g, w => {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    })
    .replace(/[-_]/, '');

export const getTreeFileBody = (jsonTree: string) =>
  `
const tree = ${jsonTree};

export default tree;
  `.trim() + '\r\n';

type BuildReactComponentsBySvgTreeProps = {
  svgDir: string;
  componentDir: string;
  treeFilename: string;
};
export const buildReactComponentsBySvgTree = async ({
  svgDir,
  componentDir,
  treeFilename,
}: BuildReactComponentsBySvgTreeProps) => {
  const toComponentPath = (svgPath: string) => {
    return svgPath
      .replace(new RegExp(`^${svgDir}`), componentDir)
      .replace(/(?<=\/?)([\w-]+)\.svg$/, (_, basename: string) => {
        return `${toPascalCase(basename)}.tsx`;
      });
  };

  const onEachFile: DirectoryTreeCallback = async (item, path) => {
    try {
      const svgCode = await readFile(path, { encoding: 'utf8', flag: 'r' });

      const componentName = toPascalCase(item.name.replace(/\.svg$/, ''));
      const componentCode = await transform(
        svgCode,
        {
          icon: true,
          typescript: true,
          index: true,
          plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        },
        { componentName },
      );

      await makeFile(toComponentPath(path), componentCode);
    } catch (err) {
      console.error(err);
    }
  };

  await checkOrCreateDir([componentDir, svgDir]);
  const svgTree = dirTree(
    svgDir,
    {
      extensions: /\.svg/,
      attributes: ['type'],
    },
    onEachFile,
  );
  const svgJsonTree = JSON.stringify(svgTree, null, '\t');

  await makeFile(`${svgDir}/${treeFilename}`, getTreeFileBody(svgJsonTree));
};

type ComponentNames = string[];
type ComponentImportsMap = {
  [dirName: string]: ComponentNames;
};
type ComponentsExportPhrases = string[];
type GetComponentModuleInfoByComponentTreeProps = {
  componentDir: string;
  treeFilename: string;
};
export const getComponentModuleInfoByComponentTree = async ({
  componentDir,
  treeFilename,
}: GetComponentModuleInfoByComponentTreeProps): Promise<{
  importsMap: ComponentImportsMap;
  exportPhrases: ComponentsExportPhrases;
}> => {
  const importsMap: ComponentImportsMap = {};
  const exportPhrases: ComponentsExportPhrases = [];

  const onEachFile: DirectoryTreeCallback = (item, path) => {
    const componentName = item.name.replace(/\.tsx$/, '');
    const componentPath = `@${path.replace(/\.tsx$/, '')}`;
    const phrase = `export { default as ${componentName} } from '${componentPath}';`;
    exportPhrases.push(phrase);
  };

  const onEachDirectory: DirectoryTreeCallback = (item, path) => {
    const childFiles = item.children?.filter(child => child.type === 'file');
    const hasChildFile = childFiles && childFiles.length !== 0;

    if (!hasChildFile) return;

    const isRootDir = item.name === componentDir;
    const dirName = isRootDir ? 'root' : item.name;
    importsMap[dirName] = childFiles.map(file => file.name.replace('.tsx', ''));
  };

  const componentsTree = dirTree(
    componentDir,
    {
      extensions: /\.tsx/,
      attributes: ['type'],
    },
    onEachFile,
    onEachDirectory,
  );
  const componentsJsonTree = JSON.stringify(componentsTree, null, '\t');
  await makeFile(
    `${componentDir}/${treeFilename}`,
    getTreeFileBody(componentsJsonTree),
  );

  return {
    importsMap,
    exportPhrases,
  };
};

type CreateComponentIndexModuleProps = {
  componentDir: string;
  exportPhrases: ComponentsExportPhrases;
};
export const createComponentIndexModule = async ({
  componentDir,
  exportPhrases,
}: CreateComponentIndexModuleProps) => {
  const fileBody = exportPhrases.reduce((acc, curr) => {
    return acc + curr + '\r\n';
  }, '');
  await makeFile(`${componentDir}/index.ts`, fileBody);
};

type CreateStoryProps = {
  componentDir: string;
  storyDir: string;
  importsMap: ComponentImportsMap;
};
export const createStory = async ({
  componentDir,
  storyDir,
  importsMap,
}: CreateStoryProps) => {
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
};
