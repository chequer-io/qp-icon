import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import dirTree from 'directory-tree';
import { execSync } from "child_process";

// relative to package.json
export const SVG_DIR = 'svg';
export const COMPONENT_DIR = 'components';
export const TREE_FILENAME = `tree.ts`;

const checkDir = async (dirPath: string) => {
  try {
    existsSync(dirPath);
  } catch (error) {
    throw new Error(`directory [${dirPath}] is not exist`);
  }
}

const makeFile = async (filename: string, body: string) => {
  const data = new Uint8Array(Buffer.from(body));

  try {
    await writeFile(filename, data);
  } catch (error) {
    throw new Error(`Error while generating the file [${filename}]`);
  }
};

const getTreeFileBody = (jsonTree: string) => `
// === made by querypie front-end team

const tree = ${jsonTree};

export default tree;
`.trim() + '\r\n'

const generate = async () => {
  console.log(`🔍 Checking [${SVG_DIR}/] exists ...`);
  await checkDir(SVG_DIR);

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${SVG_DIR}/] ...`);
  const svgTree = dirTree(SVG_DIR, {
    extensions: /\.svg/,
    attributes: ['type'],
  });
  const svgJsonTree = JSON.stringify(svgTree, null, '\t');
  await makeFile(`${SVG_DIR}/${TREE_FILENAME}`, getTreeFileBody(svgJsonTree));

  console.log(`🚚 Extracting react components from svg files ...`);
  const TEMPLATE_PATH_EXCEPT_EXT = './scripts/svgrTemplate'
  execSync(`
tsc ${TEMPLATE_PATH_EXCEPT_EXT}.ts \
&& \
npx @svgr/cli \
--icon \
--typescript \
--template ${TEMPLATE_PATH_EXCEPT_EXT}.js \
--out-dir ${COMPONENT_DIR} -- ${SVG_DIR} \
&& \
rm ${TEMPLATE_PATH_EXCEPT_EXT}.js
  `.trim());

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${COMPONENT_DIR}/] ...`);
  const componentsTree = dirTree(COMPONENT_DIR, {
    extensions: /\.tsx/,
    attributes: ['type'],
  }, ((item, path) => {
    if (item.type !== 'file') return;
  }));
  const componentsJsonTree = JSON.stringify(componentsTree, null, '\t');
  await makeFile(`${COMPONENT_DIR}/${TREE_FILENAME}`, getTreeFileBody(componentsJsonTree));

  console.log(`🚚 Creating stories ...`);
};

(async ()=> {
  await generate();
})();
