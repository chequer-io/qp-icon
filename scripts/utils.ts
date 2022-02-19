import { existsSync, mkdir, mkdirSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import prettier from 'prettier';

export const checkOrCreateDir = async (dirPath: string | string[]) => {
  const checkOrCreate = (path: string) => {
    if (!existsSync(path)) {
      mkdirSync(path);
    }
  };

  try {
    if (Array.isArray(dirPath)) {
      dirPath.forEach(v => checkOrCreate(v));
      return;
    }
    checkOrCreate(dirPath);
  } catch (error) {
    throw new Error(`Error while checkOrCreateDir()`);
  }
};

export const makeFile = async (
  filename: string,
  content: string,
  options: { usePrettier?: boolean } = {},
) => {
  const filePath = path.join(process.cwd(), filename);

  let fileContent = content;
  if (options.usePrettier) {
    const prettierConfig = await prettier.resolveConfig(filePath);
    fileContent = prettier.format(fileContent, {
      ...prettierConfig,
      filepath: filePath,
    });
  }

  try {
    mkdir(path.dirname(filePath), { recursive: true }, () => {
      writeFile(filePath, fileContent);
    });
  } catch (err) {
    console.error(err);
  }
};

type FilePath = Parameters<typeof readFile>[0];
export const readFileWithUTF8 = async (filePath: FilePath) => {
  return await readFile(filePath, {
    flag: 'r',
    encoding: 'utf8',
  });
};

export const toPascalCase = (name: string) =>
  name
    .replace(/[a-zA-Z0-9]+/g, w => {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    })
    .replace(/[-_]/, '');

export const getTreeFileBody = (jsonTree: string) =>
  `
const tree = ${jsonTree};

export default tree;
  `.trim() + '\r\n';
