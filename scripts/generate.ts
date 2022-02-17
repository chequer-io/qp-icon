import {
  checkDir,
  createComponentTree,
  createStory,
  createSvgTree,
  extractReactComponentsFromSvgFiles,
} from '@scripts/utils';

// relative to package.json
const SVG_DIR = 'svg';
const COMPONENT_DIR = 'components';
const STORY_DIR = 'stories';
const TREE_FILENAME = `tree.ts`;
const SVGR_TEMPLATE_FILENAME = 'scripts/svgrTemplate';

const generate = async () => {
  console.log(`🔍 Checking [${SVG_DIR}/] exists ...`);
  await checkDir(SVG_DIR);

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${SVG_DIR}/] ...`);
  await createSvgTree({
    targetDir: SVG_DIR,
    treeFilename: TREE_FILENAME,
  });

  console.log(`🚚 Extracting react components from svg files ...`);
  extractReactComponentsFromSvgFiles({
    sourceDir: SVG_DIR,
    targetDir: COMPONENT_DIR,
    svgrTemplateFilename: SVGR_TEMPLATE_FILENAME,
  });

  console.log(`🚚 Creating [${TREE_FILENAME}] in [${COMPONENT_DIR}/] ...`);
  const componentImportsMap = await createComponentTree({
    targetDir: COMPONENT_DIR,
    treeFilename: TREE_FILENAME,
  });

  console.log(`🚚 Creating stories ...`);
  await createStory({
    targetDir: STORY_DIR,
    componentImportsMap,
  });
};

(async () => {
  await generate();
})();
