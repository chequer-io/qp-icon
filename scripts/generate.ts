// relative to package.json
import {
  checkDir,
  createComponentTree,
  createStory,
  createSvgTree,
  extractReactComponentsFromSvgFiles,
} from '@scripts/utils';

export const SVG_DIR = 'svg';
export const COMPONENT_DIR = 'components';
export const STORY_DIR = 'stories';
export const TREE_FILENAME = `tree.ts`;
export const SVR_TEMPLATE_FILENAME = 'scripts/svgrTemplate';

const generate = async () => {
  console.log(`🔍 Checking [${SVG_DIR}/] exists ...`);
  await checkDir(SVG_DIR);

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${SVG_DIR}/] ...`);
  await createSvgTree();

  console.log(`🚚 Extracting react components from svg files ...`);
  extractReactComponentsFromSvgFiles();

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${COMPONENT_DIR}/] ...`);
  const componentImportsMap = await createComponentTree();

  console.log(`🚚 Creating stories ...`);
  await createStory(componentImportsMap);
};

(async () => {
  await generate();
})();
