import { readdir, rename } from 'node:fs/promises';

async function updateDistFile() {
  const directories = await readdir('./src/pages');

  directories.forEach(dir => {
    rename(
      `${process.cwd()}/dist/${dir}/index.prod.html`,
      `${process.cwd()}/dist/${dir}/index.html`
    );
  })
}

updateDistFile();
