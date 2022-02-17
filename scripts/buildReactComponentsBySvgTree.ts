import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { readFile } from 'fs/promises';
import {
  checkOrCreateDir,
  getTreeFileBody,
  makeFile,
  toPascalCase,
} from '@scripts/utils';
import { transform } from '@svgr/core';

type Props = {
  svgDir: string;
  componentDir: string;
  treeFilename: string;
};
export default async function buildReactComponentsBySvgTree({
  svgDir,
  componentDir,
  treeFilename,
}: Props) {
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
}
