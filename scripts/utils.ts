import { existsSync, mkdir, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';

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

export const makeFile = async (filename: string, body: string) => {
  const filePath = path.join(process.cwd(), filename);

  try {
    mkdir(path.dirname(filePath), { recursive: true }, () => {
      writeFile(filePath, body);
    });
  } catch (err) {
    console.error(err);
  }
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
