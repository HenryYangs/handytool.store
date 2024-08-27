import { readdir, rename } from 'node:fs/promises';

async function updateDistFile() {
  const directories = await readdir('./dist', { recursive: true });
  const entries = directories.filter((_path) => _path.match(/index\.prod\.html$/));

  entries.forEach(file => {
    rename(
      `${process.cwd()}/dist/${file}`,
      `${process.cwd()}/dist/${file.replace(/index\.prod\.html/, 'index.html')}`
    );
  })
}

updateDistFile();
