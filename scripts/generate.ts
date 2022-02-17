import {
  buildReactComponentsBySvgTree,
  getComponentModuleInfoByComponentTree,
  createStory,
  createComponentIndexModule,
} from '@scripts/utils';

// relative to package.json
const SVG_DIR = 'svg';
const COMPONENT_DIR = 'components';
const STORY_DIR = 'stories';
const TREE_FILENAME = `tree.ts`;
// const SVGR_TEMPLATE_FILENAME = 'scripts/svgrTemplate';

const generate = async () => {
  console.log(`🚚 Building react components ...`);
  await buildReactComponentsBySvgTree({
    svgDir: SVG_DIR,
    componentDir: COMPONENT_DIR,
    treeFilename: TREE_FILENAME,
  });

  console.log(`🚚 Getting component imports map ...`);
  const { importsMap, exportPhrases } =
    await getComponentModuleInfoByComponentTree({
      componentDir: COMPONENT_DIR,
      treeFilename: TREE_FILENAME,
    });

  console.log(`🚚 Creating component's index module ...`);
  await createComponentIndexModule({
    componentDir: COMPONENT_DIR,
    exportPhrases,
  });

  console.log(`🚚 Creating story ...`);
  await createStory({
    componentDir: COMPONENT_DIR,
    storyDir: STORY_DIR,
    importsMap,
  });
};

(async () => {
  await generate();
})();
