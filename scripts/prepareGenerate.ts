import buildReactComponentsBySvgTree from '@scripts/buildReactComponentsBySvgTree';
import checkDirnames from '@scripts/checkDirnames';
import dirnames from '@/dirnames';
import rimraf from 'rimraf';

const { STORY_DIR, SVG_DIR, COMPONENT_DIR, TREE_FILENAME } = dirnames;
checkDirnames(SVG_DIR, COMPONENT_DIR, STORY_DIR);

const prepareGenerate = async () => {
  console.log(`🚚 Clear components directory ...`);
  await rimraf(COMPONENT_DIR, error => {
    if (error) {
      throw error;
    }
  });

  console.log(`🚚 Building react components from svg files...`);
  await buildReactComponentsBySvgTree({
    svgDir: SVG_DIR,
    componentDir: COMPONENT_DIR,
    treeFilename: TREE_FILENAME,
  });
};

(async () => {
  await prepareGenerate();
})();
