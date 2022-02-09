import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import dirTree from 'directory-tree';

const SVG_DIR = './svg-files'; // relative to package.json

const checkSvgDir = async () => {
  try {
    existsSync(SVG_DIR);
  } catch (error) {
    throw new Error(`SVG directory [${SVG_DIR}] is not exist`);
  }
}

const makeFile = async (filename: string, body: string) => {
  const data = new Uint8Array(Buffer.from(body));

  try {
    await writeFile(filename, data);
    console.log(`The file has been saved! (file: ${filename})`);
  } catch (error) {
    throw new Error(`Error while generating the file. (file: ${filename})`);
  }
};

const collectingSvgFiles = async () => {
  await checkSvgDir();

  const filteredTree = dirTree(SVG_DIR, { extensions: /\.svg/ });

  await makeFile(
    `${SVG_DIR}/index.ts`,
    `// === made by querypie front-end team

const json = ${JSON.stringify(filteredTree, null, '\t')};

export default json;
`,
  );
};

(async () => {
  await collectingSvgFiles();
})();
