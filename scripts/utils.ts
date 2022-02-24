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

type MakeFileOptions =
  | {
      usePrettier?: boolean;
    }
  | undefined;
export const makeFile = async (
  filename: string,
  content: string,
  options: MakeFileOptions = { usePrettier: true },
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
  name.replace(/((?<=^)[a-z]|(?<=[-_])[a-zA-Z])/gi, (_, $1) =>
    $1.toUpperCase(),
  );

export const toCamelCase = (name: string) =>
  name.replace(/[-_]([a-zA-Z])/gi, (_, $1) => $1.toUpperCase());

export const getTreeFileBody = (jsonTree: string) =>
  `
const tree = ${jsonTree};

export default tree;
  `.trim() + '\r\n';
