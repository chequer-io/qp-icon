import * as path from 'path';
import { opendir, readdir } from 'fs/promises';
import { writeFile } from 'fs';

const svgSrc = './svg-files';

const makeFile = async (filename: string, body: string) => {
  const data = new Uint8Array(Buffer.from(body));
  writeFile(filename, data, err => {
    if (err) throw err;
    console.log(`The file has been saved! (file : ${filename})`);
  });
};

const collectingSvgFiles = async () => {
  const dir = await opendir(svgSrc);
  const fileBody: Record<string, any> = {};
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      fileBody[dirent.name] = {
        files: [],
      };
      const files = await readdir(path.join(svgSrc, dirent.name));
      for (const file of files) {
        fileBody[dirent.name].files.push({ filename: file });
      }
    }
  }

  makeFile(
    `${svgSrc}/index.ts`,
    `// === made by querypie front-end team 
    
const json = ${JSON.stringify(fileBody, null, '\t')};
export default json;
`,
  );
};

collectingSvgFiles();
