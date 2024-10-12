import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import history from 'connect-history-api-fallback';
import { getPathRewriteRules, getRollupInput } from './script/utils/multi-page';
import { sveltePreprocess } from 'svelte-preprocess';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default async ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    ...(isProd
      ? {
          root: 'src/pages',
        }
      : {}),
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
      }),
      {
        name: 'path-rewrite-plugin',
        async configureServer(server) {
          server.middlewares.use(
            history({
              htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
              disableDotRule: false,
              rewrites: await getPathRewriteRules(),
            })
          );
        },
      },
    ],
    build: {
      ...(isProd
        ? {
            outDir: '../../dist',
          }
        : {}),
      rollupOptions: {
        input: await getRollupInput(isProd),
      },
    },
  });
}