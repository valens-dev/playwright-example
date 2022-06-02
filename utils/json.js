import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default function json(p) {
  let rawdata = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), p));
  return JSON.parse(rawdata);
}
