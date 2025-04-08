import fs from 'fs';
import path from 'path';

const getFormat = (filepath) => path.extname(filepath).slice(1);

const parse = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }

  throw new Error(`Unknown format: ${format}`);
};

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const rawData = fs.readFileSync(absolutePath, 'utf-8');
  const format = getFormat(filepath);
  return parse(rawData, format);
};

export default getData;
