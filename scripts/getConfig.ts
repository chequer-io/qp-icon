import * as path from 'path';
import * as fs from 'fs';

type Config = {
  dirname: {
    src: string;
    component: string;
    svg: string;
    story: string;
  };
  filename: {
    tree: string;
  };
  colorControlExceptedIconDirnames: string[];
};
const defaultConfig: Config = {
  dirname: {
    src: 'src',
    component: `src/components`,
    svg: 'icons',
    story: 'stories',
  },
  filename: {
    tree: 'tree.ts',
  },
  colorControlExceptedIconDirnames: [],
};

const allowedConfigFilenames = ['.qirc', '.qirc.json'];

export default async function getConfig(): Promise<Config> {
  try {
    const configFilePath = allowedConfigFilenames
      .map(v => path.resolve(process.cwd(), v))
      .find(v => fs.existsSync(v));

    if (!configFilePath) {
      return defaultConfig;
    }

    const { default: config } = await import(configFilePath);

    return {
      ...defaultConfig,
      ...config,
    };
  } catch (e) {
    console.error(e);

    return defaultConfig;
  }
}
