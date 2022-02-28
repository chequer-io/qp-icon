import { makeFile } from '@scripts/utils';
import type { ComponentsExportPhrases } from '@scripts/getComponentModuleInfoByComponentTree';

type Props = {
  exportPhrases: ComponentsExportPhrases;
};
export default async function createComponentIndexModule({
  exportPhrases,
}: Props) {
  const fileBody = exportPhrases.reduce((acc, curr) => {
    return acc + curr + '\r\n';
  }, '');
  await makeFile(`index.ts`, fileBody);
}
