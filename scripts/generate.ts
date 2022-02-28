import getComponentModuleInfoByComponentTree from '@scripts/getComponentModuleInfoByComponentTree';
import createComponentIndexModule from '@scripts/createComponentIndexModule';
import createStory from '@scripts/createStory';
import dirnames from '@/dirnames';

const { STORY_DIR, COMPONENT_DIR, TREE_FILENAME } = dirnames;

const generate = async () => {
  console.log(`🚚 Getting component imports map ...`);
  const { importsMap, exportPhrases } =
    await getComponentModuleInfoByComponentTree({
      componentDir: COMPONENT_DIR,
      treeFilename: TREE_FILENAME,
    });

  console.log(`🚚 Creating component's index module ...`);
  await createComponentIndexModule({
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
