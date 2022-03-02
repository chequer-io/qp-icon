import dirTree, { DirectoryTreeCallback } from 'directory-tree';
import { Builder, parseStringPromise } from 'xml2js';
import { basename } from 'path';
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
  const onEachFile: DirectoryTreeCallback = async (item, path) => {
    try {
      await buildComponentFromSvg({
        svg: {
          path,
          dirname: svgDir,
        },
        component: {
          name: toPascalCase(basename(item.name, '.svg')),
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
  ${newSvgCode.replace('temp="{...props}"', '{...props}')}
);

export default ${component.name};
      `.trim();

  const componentPath = svg.path
    .replace(new RegExp(`(?<=/?)${svg.dirname}(?=/)`), component.dirname)
    .replace(/(?<=\/?)([\w-]+)\.svg$/, (_, basename: string) => {
      return `${toPascalCase(basename)}.tsx`;
    });

  await makeFile(componentPath, componentCode);
}
