import getComponentModuleInfoByComponentTree from '@/scripts/getComponentModuleInfoByComponentTree';
import createComponentIndexModule from '@/scripts/createComponentIndexModule';
import createStory from '@/scripts/createStory';
import getConfig from '@/scripts/getConfig';

const generate = async () => {
  const { dirname, filename } = await getConfig();

  console.log(`🚚 Getting component imports map ...`);
  const { importsMap, exportPhrases } =
    await getComponentModuleInfoByComponentTree({
      componentDir: dirname.component,
      treeFilename: filename.tree,
    });

  console.log(`🚚 Creating component's index module ...`);
  await createComponentIndexModule({
    exportPhrases,
  });

  console.log(`🚚 Creating story ...`);
  await createStory({
    storyDir: dirname.story,
    importsMap,
  });
};

(async () => {
  await generate();
})();
