import path from 'path';
import { readdir } from 'node:fs/promises';

export async function getPathRewriteRules() {
  const directories = await readdir('./src/pages');
  const rules = [];

  directories.forEach(dir => {
    rules.push({
      from: dir === 'main' ? '/' : `/${dir}`,
      to: `/src/pages/${dir}/index.html`,
    });
  });

  return rules;
}

export async function getRollupInput(isProd) {
  const directories = await readdir('./src/pages');
  const result = {};

  directories.forEach(dir => {
    result[dir] = isProd ? `/${dir}/index.prod.html` : path.resolve(__dirname, `/src/pages/${dir}/index.html`)
  });

  return result;
}

// module.exports = {
//   getPathRewriteRules,
//   getRollupInput,
// };
