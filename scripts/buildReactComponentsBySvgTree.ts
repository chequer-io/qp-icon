import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { readFile } from 'fs/promises';
import {
  checkOrCreateDir,
  getTreeFileBody,
  makeFile,
  toPascalCase,
} from '@scripts/utils';
import { Builder, parseStringPromise } from 'xml2js';

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
  const onEachFile: DirectoryTreeCallback = async (item, path) => {
    try {
      await buildComponentFromSvg({
        svgPath: path,
        svgDir,
        componentDir,
      });
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

async function buildComponentFromSvg({
  svgPath,
  svgDir = svgPath.split('/')[0],
  componentDir,
}: {
  svgPath: string;
  svgDir?: string;
  componentDir: string;
}) {
  const svgCode = await readFile(svgPath, { encoding: 'utf8', flag: 'r' });
  const svgJson = (await parseStringPromise(svgCode)).svg;

  const styledJson = {
    SvgComponent: {
      ...svgJson,
      $: {
        viewBox: svgJson['$']['viewBox'],
        temp: 'x',
      },
    },
  };

  const xmlBuilder = new Builder();
  const newSvgCodeXml = xmlBuilder.buildObject(styledJson);

  const componentCode = `
import React from 'react';
import SvgComponent from '@common/SvgComponent';

const A: CustomizedSVGComponent = ({ ...props }) => (
${newSvgCodeXml
  .split('\n')
  .slice(1)
  .join('\n')
  .replace('temp="x"', '{...props}') //
  .replace(/^(?=.)/gm, '  ')}
);

export default A;
      `.trim();

  const componentPath = svgPath
    .replace(new RegExp(`^${svgDir}`), componentDir)
    .replace(/(?<=\/?)([\w-]+)\.svg$/, (_, basename: string) => {
      return `${toPascalCase(basename)}.tsx`;
    });

  await makeFile(componentPath, componentCode);
}
