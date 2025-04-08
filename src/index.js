import fs from 'fs';
import path from 'path';

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(data);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  return JSON.stringify(data1, null, 2) + '\n' + JSON.stringify(data2, null, 2);
};

export default genDiff;
