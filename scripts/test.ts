import { readFileSync } from 'fs';
import { parseStringPromise, Builder } from 'xml2js';
import path from 'path';

const fn = async (src: string) => {
  try {
    const fileContents = readFileSync(src, { encoding: 'utf8', flag: 'r' });
    console.log(fileContents);
    const json = await parseStringPromise(fileContents);
    console.log(json);
    json.svg['$'].width = '100';

    const newJson = {
      StyledSvg: {
        ...json.svg,
      },
    };

    const xmlBuilder = new Builder();
    const newXml = xmlBuilder.buildObject(newJson);
    console.log(newXml);
  } catch (e) {
    console.error(e);
  }
};

fn(path.resolve('icons/a.icons'));
