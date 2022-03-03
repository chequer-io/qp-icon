import getComponentModuleInfoByComponentTree from './getComponentModuleInfoByComponentTree';
import createComponentIndexModule from './createComponentIndexModule';
import createStory from './createStory';
import getConfig from './getConfig';

const generate = async () => {
  const { dirname, filename } = await getConfig();

  console.log(`🚚 Getting component imports map ...`);
  const { importsMap, exportPhrases } =
    await getComponentModuleInfoByComponentTree({
      srcDir: dirname.src,
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
