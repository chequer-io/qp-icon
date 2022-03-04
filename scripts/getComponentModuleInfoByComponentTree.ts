import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { getTreeFileBody, makeFile } from './utils';
import * as path from 'path';

export type ComponentNames = string[];
export type ComponentImportsMap = {
  [dirName: string]: ComponentNames;
};
export type ComponentsExportPhrases = string[];

export type Props = {
  srcDir: string;
  componentDir: string;
  treeFilename: string;
};
export default async function getComponentModuleInfoByComponentTree({
  srcDir,
  componentDir,
  treeFilename,
}: Props): Promise<{
  importsMap: ComponentImportsMap;
  exportPhrases: ComponentsExportPhrases;
}> {
  const importsMap: ComponentImportsMap = {};
  const exportPhrases: ComponentsExportPhrases = [];

  const onEachFile: DirectoryTreeCallback = (item, itemPath) => {
    const exceptExtension = (str: string) => str.replace(/\.tsx$/, '');

    const componentPath = path.relative(
      path.resolve(__dirname, srcDir),
      path.resolve(__dirname, itemPath),
    );

    const phrase = `export * from './${exceptExtension(componentPath)}';`;
    exportPhrases.push(phrase);
  };

  const onEachDirectory: DirectoryTreeCallback = item => {
    const childFiles = item.children?.filter(child => child.type === 'file');
    const hasChildFile = childFiles && childFiles.length !== 0;

    if (!hasChildFile) return;

    const isRootDir = item.name === componentDir;
    const dirName = isRootDir ? 'none' : item.name;
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
}
