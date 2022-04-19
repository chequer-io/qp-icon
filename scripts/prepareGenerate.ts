import buildReactComponentsBySvgTree from './buildReactComponentsBySvgTree';
import getConfig from './getConfig';
import rimraf from 'rimraf';

const prepareGenerate = async () => {
  const { dirname } = await getConfig();

  console.log(`🚚 Clear components directory ...`);
  await rimraf(dirname.component, error => {
    if (error) {
      throw error;
    }
  });

  console.log(`🚚 Building react components from svg files...`);
  await buildReactComponentsBySvgTree();
};

(async () => {
  await prepareGenerate();
})();
