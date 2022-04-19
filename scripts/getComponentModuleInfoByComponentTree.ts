import * as path from 'path';
import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { getTreeFileBody, makeFile } from './utils';
import getConfig from './getConfig';

export type ComponentNames = string[];
export type ComponentImportsMap = {
  [dirName: string]: ComponentNames;
};
export type ComponentsExportPhrases = string[];

export default async function getComponentModuleInfoByComponentTree(): Promise<{
  importsMap: ComponentImportsMap;
  exportPhrases: ComponentsExportPhrases;
}> {
  const { dirname, filename } = await getConfig();

  const importsMap: ComponentImportsMap = {};
  const exportPhrases: ComponentsExportPhrases = [];

  const onEachFile: DirectoryTreeCallback = (item, itemPath) => {
    const exceptExtension = (str: string) => str.replace(/\.tsx$/, '');

    const componentRelativePath = './' + path.relative(
      path.resolve(__dirname, dirname.src),
      path.resolve(__dirname, itemPath),
    ).split(path.sep).join(path.posix.sep);

    const phrase = `export * from '${exceptExtension(componentRelativePath)}';`;
    exportPhrases.push(phrase);
  };

  const onEachDirectory: DirectoryTreeCallback = item => {
    const childFiles = item.children?.filter(child => child.type === 'file');
    const hasChildFile = childFiles && childFiles.length !== 0;

    if (!hasChildFile) return;

    const isRootDir = item.name === dirname.component;
    const dirName = isRootDir ? 'none' : item.name;
    importsMap[dirName] = childFiles.map(file => file.name.replace('.tsx', ''));
  };

  const componentsTree = dirTree(
    dirname.component,
    {
      extensions: /\.tsx/,
      attributes: ['type'],
    },
    onEachFile,
    onEachDirectory,
  );
  const componentsJsonTree = JSON.stringify(componentsTree, null, '\t');
  await makeFile(
    `${dirname.component}/${filename.tree}`,
    getTreeFileBody(componentsJsonTree),
  );

  return {
    importsMap,
    exportPhrases,
  };
}
