import path from 'path';
import { readdir } from 'node:fs/promises';

export async function getPathRewriteRules() {
  const directories = await readdir('./src/pages', { recursive: true });
  const entries = directories.filter((_path) => _path.match(/index\.html$/));
  const rules = [];

  entries.forEach((dir) => {
    const matched = dir.replace('/index.html', '');
    const to = `/src/pages/${matched}/index.html`;

    /**
     * ensuring home page is the last item of rule array
     * other rules insert from the head of rule array
     * avoid match home page rule first
     */
    if (matched === 'main') {
      rules.push(
        {
          from: '/',
          to,
        },
        {
          from: '/\*/',
          to: '/src/pages/404/index.html',
        }
      );
    } else {
      rules.unshift({
        from: `/${matched}`,
        to,
      });
    }
  });

  return rules;
}

export async function getRollupInput(isProd) {
  const directories = await readdir('./src/pages', { recursive: true });
  const entries = directories.filter((_path) => _path.match(/index\.html$/));
  const result = {};

  entries.forEach((dir) => {
    const matched = dir.replace('/index.html', '');

    result[matched] = isProd
      ? `/${matched}/index.prod.html`
      : path.resolve(__dirname, `/src/pages/${matched}/index.html`);
  });

  return result;
}
