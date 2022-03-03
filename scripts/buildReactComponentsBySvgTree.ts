import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { Builder, parseStringPromise } from 'xml2js';
import * as path from 'path';
import {
  checkOrCreateDir,
  getTreeFileBody,
  makeFile,
  readFileWithUTF8,
  toCamelCase,
  toPascalCase,
} from '@/scripts/utils';

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
  const onEachFile: DirectoryTreeCallback = async (item, svgPath) => {
    try {
      await buildComponentFromSvg({
        svg: {
          path: svgPath,
          dirname: svgDir,
        },
        component: {
          name: toPascalCase(path.basename(item.name, '.svg')),
          dirname: componentDir,
        },
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
  svg,
  component,
}: {
  svg: {
    path: string;
    dirname: string;
  };
  component: {
    name: string;
    dirname: string;
  };
}) {
  const svgCode = await readFileWithUTF8(svg.path);
  const svgJson = (await parseStringPromise(svgCode)).svg;
  const innerComponentName = 'SvgComponent';

  const styledJson = {
    [innerComponentName]: {
      ...svgJson,
      $: {
        viewBox: svgJson['$']['viewBox'],
        className: 'querypie_icon',
        ['data-qi-has-multi-path']: svgJson.path?.length > 1,
        temp: '{...props}',
      },
    },
  };

  const xmlBuilder = new Builder();
  const newSvgCode = xmlBuilder
    .buildObject(styledJson)
    .split('\n') // Remove the first line starting with "<xml...".
    .slice(1)
    .join('\n')
    .replace(/([^\s]+-.+)(?==".+")/gm, w => toCamelCase(w));

  const componentCode = `
import ${innerComponentName} from '@/src/common/${innerComponentName}';

const ${component.name}: CustomizedSVGComponent = ({ ...props }) => (
  ${newSvgCode
    .replace('dataQiHasMultiPath=', 'data-qi-has-multi-path=')
    .replace('temp="{...props}"', '{...props}')}
);

export default ${component.name};
      `.trim();

  const componentPath = svg.path
    // change dirname
    .replace(
      new RegExp(`(?<=${path.sep}?)${svg.dirname}(?=${path.sep})`),
      component.dirname,
    )
    // filename to pascal-case, and change extname
    .replace(
      new RegExp(`(?<=[${path.sep}]?)([\\w-]+)\\.svg$`),
      (_, basename: string) => {
        return `${toPascalCase(basename)}.tsx`;
      },
    );

  await makeFile(componentPath, componentCode);
}
