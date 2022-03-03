import buildReactComponentsBySvgTree from '@/scripts/buildReactComponentsBySvgTree';
import { Dirname, Filename } from '@/qi.config';
import rimraf from 'rimraf';

const prepareGenerate = async () => {
  console.log(`🚚 Clear components directory ...`);
  await rimraf(Dirname.COMPONENT, error => {
    if (error) {
      throw error;
    }
  });

  console.log(`🚚 Building react components from svg files...`);
  await buildReactComponentsBySvgTree({
    svgDir: Dirname.SVG,
    componentDir: Dirname.COMPONENT,
    treeFilename: Filename.TREE,
  });
};

(async () => {
  await prepareGenerate();
})();
