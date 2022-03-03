import { makeFile } from '@/scripts/utils';
import type { ComponentsExportPhrases } from '@/scripts/getComponentModuleInfoByComponentTree';
import * as path from 'path';
import { Dirname } from '@/qi.config';

type Props = {
  exportPhrases: ComponentsExportPhrases;
};
export default async function createComponentIndexModule({
  exportPhrases,
}: Props) {
  const fileBody = exportPhrases.reduce((acc, curr) => {
    return acc + curr + '\r\n';
  }, '');
  await makeFile(path.join(Dirname.SRC, 'index.ts'), fileBody);
}
