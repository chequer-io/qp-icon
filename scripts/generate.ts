import getComponentModuleInfoByComponentTree from '@/scripts/getComponentModuleInfoByComponentTree';
import createComponentIndexModule from '@/scripts/createComponentIndexModule';
import createStory from '@/scripts/createStory';
import { Dirname, Filename } from '@/qi.config';

const generate = async () => {
  console.log(`🚚 Getting component imports map ...`);
  const { importsMap, exportPhrases } =
    await getComponentModuleInfoByComponentTree({
      componentDir: Dirname.COMPONENT,
      treeFilename: Filename.TREE,
    });

  console.log(`🚚 Creating component's index module ...`);
  await createComponentIndexModule({
    exportPhrases,
  });

  console.log(`🚚 Creating story ...`);
  await createStory({
    storyDir: Dirname.STORY,
    importsMap,
  });
};

(async () => {
  await generate();
})();
