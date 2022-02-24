import { makeFile } from '@scripts/utils';
import type { ComponentsExportPhrases } from '@scripts/getComponentModuleInfoByComponentTree';

type Props = {
  componentDir: string;
  exportPhrases: ComponentsExportPhrases;
};
export default async function createComponentIndexModule({
  componentDir,
  exportPhrases,
}: Props) {
  const fileBody = exportPhrases.reduce((acc, curr) => {
    return acc + curr + '\r\n';
  }, '');
  await makeFile(`${componentDir}/index.ts`, fileBody);
  await makeFile(`dist/index.d.ts`, fileBody);
}
