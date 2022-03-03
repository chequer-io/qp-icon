import { readFile } from 'fs/promises';
import * as path from 'path';
import * as fs from 'fs';

const allowedConfigFilenames = ['.qirc', '.qirc.json'];

export default async function getConfig() {
  try {
    const configFilePath = allowedConfigFilenames
      .map(v => path.resolve(process.cwd(), v))
      .find(v => fs.existsSync(v));

    if (!configFilePath) {
      return {};
    }

    const config = require(configFilePath);
    return config;
  } catch (e) {
    console.error(e);

    return {};
  }
}
