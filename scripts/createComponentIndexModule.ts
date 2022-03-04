import { makeFile } from './utils';
import { ComponentsExportPhrases } from './getComponentModuleInfoByComponentTree';
import * as path from 'path';
import getConfig from './getConfig';

type Props = {
  exportPhrases: ComponentsExportPhrases;
};
export default async function createComponentIndexModule({
  exportPhrases,
}: Props) {
  const fileBody = exportPhrases.reduce((acc, curr) => {
    return acc + curr + '\r\n';
  }, '');
  const { dirname } = await getConfig();
  await makeFile(path.join(dirname.src, 'index.ts'), fileBody);
}
