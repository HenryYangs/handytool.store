import { readdir, rename, readFile, writeFile, copyFile } from 'node:fs/promises';
import * as cheerio from 'cheerio';
import { parseJSON } from '../../src/utils/object/index.js';

function getConfigPath(file) {
  return `${process.cwd()}/src/pages/${file.replace(/index\.prod\.html/, 'config.json')}`;
}

async function getConfig(path) {
  let config = {};

  try {
    const txt = await readFile(path, { encoding: 'utf-8' });

    config = parseJSON(txt);
  } catch {}

  return config;
}

async function copyCloudflareFiles() {
  try {
    // 复制 _headers 文件
    await copyFile('./_headers', './dist/_headers');
    console.log('✓ Copied _headers to dist/');
  } catch (error) {
    console.log('⚠ _headers file not found, skipping...');
  }

  try {
    // 复制 _redirects 文件
    await copyFile('./_redirects', './dist/_redirects');
    console.log('✓ Copied _redirects to dist/');
  } catch (error) {
    console.log('⚠ _redirects file not found, skipping...');
  }

  try {
    // 复制 ads.txt 文件
    await copyFile('./ads.txt', './dist/ads.txt');
    console.log('✓ Copied ads.txt to dist/');
  } catch (error) {
    console.log('⚠ ads.txt file not found, skipping...');
  }

  try {
    // 复制 sw.txt 文件
    await copyFile('./sw.js', './dist/sw.txt');
    console.log('✓ Copied sw.js to dist/');
  } catch (error) {
    console.log('⚠ sw.js file not found, skipping...');
  }

  try {
    // 复制 index.html 文件
    await copyFile('./public/index.html', './dist/index.html');
    console.log('✓ Copied index.html to dist/');
  } catch (error) {
    console.log('⚠ index.html file not found, skipping...');
  }
}

async function updateDistFile() {
  const directories = await readdir('./dist', { recursive: true });
  const entries = directories.filter((_path) => _path.match(/index\.prod\.html$/));

  const commonConfig = await getConfig(`${process.cwd()}/script/config.json`);

  entries.forEach(async file => {
    const config = await getConfig(getConfigPath(file));

    const oldFilePath = `${process.cwd()}/dist/${file}`;
    const content = await readFile(oldFilePath, { encoding: 'utf-8' });
    const $ = cheerio.load(content);

    $('head').prepend(
      `
        <title>${config.title || 'handytool.store'}</title>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TSD8N6WJ');</script>
        <!-- End Google Tag Manager -->

        <!-- Google tag (gtag.js) -->
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-KS4E4ST92M'></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KS4E4ST92M');
        </script>

        <!-- Google Ads -->
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7586609252833770' crossorigin='anonymous'></script>
      `
    );

    $('head').prepend(
      `${
        (commonConfig.meta || []).concat(config.meta || []).map(m => {
          let props = [];

          for (const [key, value] of Object.entries(m)) {
            props.push(`${key}='${value}'`);
          }

          return `<meta ${props.join(' ')} />`;
        }).join('\n')
      }`
    )

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
  });

  // 复制 Cloudflare 配置文件
  await copyCloudflareFiles();
}

updateDistFile();
