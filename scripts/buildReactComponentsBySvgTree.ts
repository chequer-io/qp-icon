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
} from './utils';
import getConfig from './getConfig';

type SvgCustomProps = {
  [name: string]: {
    key: 'role' | `data-qi-${string}`;
    value?: string;
  };
};
const svgCustomProps: SvgCustomProps = {
  role: {
    key: 'role',
    value: 'querypie-icon',
  },
  controllable: {
    key: 'data-qi-color-controllable',
  },
} as const;

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

  const { colorControlExceptedIconDirnames } = await getConfig();

  const pathLength = svgJson.path?.length ?? 0;
  let colorControllable = false;
  if (pathLength === 1) {
    colorControllable = !colorControlExceptedIconDirnames.find((dirnameToken) => {
      return svg.path.includes(dirnameToken);
    });
  }

  const styledJson = {
    [innerComponentName]: {
      ...svgJson,
      $: {
        viewBox: svgJson['$']['viewBox'],
        [svgCustomProps.role.key]: svgCustomProps.role.value,
        [svgCustomProps.controllable.key]: colorControllable.toString(),
        temp: '{...props}',
      },
    },
  };

  const xmlBuilder = new Builder();
  let newSvgCode = xmlBuilder.buildObject(styledJson);

  newSvgCode = newSvgCode
    .substring(newSvgCode.indexOf('\n'))
    .replace(/(?=.*-)([\w-]+)(?==".*")/gm, w => {
      if (w.indexOf('data-qi-') > -1) return w;

      return toCamelCase(w);
    });

  const componentCode = `
import ${innerComponentName} from '../../common/${innerComponentName}';

const ${component.name}: CustomizedSVGComponent = ({ ...props }) => (
  ${newSvgCode.replace('temp="{...props}"', '{...props}')}
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
