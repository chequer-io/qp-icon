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

const generate = async () => {
  console.log(`🔍 Checking svg directory [${SVG_DIR}] exists ...`);
  await checkDir(SVG_DIR);

  console.log(`🚚 Creating [${SVG_DIR}] tree ...`);
  const filteredTree = dirTree(SVG_DIR, {
    extensions: /\.svg/,
    attributes: ['type'],
  });
  const svgJsonTree = JSON.stringify(filteredTree, null, '\t');

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${SVG_DIR}] ...`);
  const getTreeFileBody = (jsonTree: string) => `
// === made by querypie front-end team

const tree = ${jsonTree};

export default tree;
`.trim() + '\r\n'
  await makeFile(`${SVG_DIR}/${TREE_FILENAME}`, getTreeFileBody(svgJsonTree));

  console.log(`🚚 Creating react components from svg files...`);
  execSync(`npx @svgr/cli --typescript --out-dir ${COMPONENT_DIR} -- ${SVG_DIR}`);
};

(async ()=> {
  await generate();
})();
