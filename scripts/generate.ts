import getComponentModuleInfoByComponentTree from './getComponentModuleInfoByComponentTree';
import createComponentIndexModule from './createComponentIndexModule';
import createStory from './createStory';

const generate = async () => {
  console.log(`🚚 Getting component imports map ...`);
  const { importsMap, exportPhrases } =
    await getComponentModuleInfoByComponentTree();

  console.log(`🚚 Creating component's index module ...`);
  await createComponentIndexModule({
    exportPhrases,
  });

  console.log(`🚚 Creating story ...`);
  await createStory({
    importsMap,
  });
};

(async () => {
  await generate();
})();
