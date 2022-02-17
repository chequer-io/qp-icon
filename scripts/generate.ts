import {
  buildReactComponentsFromSvgFiles,
  createStory,
  createSvgTree,
} from '@scripts/utils';

// relative to package.json
const SVG_DIR = 'svg';
const COMPONENT_DIR = 'components';
const STORY_DIR = 'stories';
const TREE_FILENAME = `tree.ts`;
// const SVGR_TEMPLATE_FILENAME = 'scripts/svgrTemplate';

const generate = async () => {
  console.log(`🚚 Creating [${TREE_FILENAME}] in [${SVG_DIR}/] ...`);
  await createSvgTree({
    targetDir: SVG_DIR,
    treeFilename: TREE_FILENAME,
  });

  console.log(`🚚 Extracting react components from svg files ...`);
  const componentImportsMap = await buildReactComponentsFromSvgFiles({
    sourceDir: SVG_DIR,
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
