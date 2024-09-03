import { readdir, rename, readFile, writeFile } from 'node:fs/promises';
import * as cheerio from 'cheerio';

async function updateDistFile() {
  const directories = await readdir('./dist', { recursive: true });
  const entries = directories.filter((_path) => _path.match(/index\.prod\.html$/));

  entries.forEach(async file => {
    const oldFilePath = `${process.cwd()}/dist/${file}`;
    const content = await readFile(oldFilePath, { encoding: 'utf-8' });
    const $ = cheerio.load(content);

    $('head').prepend(
      `
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TSD8N6WJ');</script>
        <!-- End Google Tag Manager -->
      `
    );
    $('body').prepend(
      `
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-TSD8N6WJ'
        height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
      `
    );

    await writeFile(oldFilePath, $.html());

    rename(
      oldFilePath,
      oldFilePath.replace(/index\.prod\.html/, 'index.html')
    );
  })
}

updateDistFile();
