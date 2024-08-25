import {resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import history from 'connect-history-api-fallback';
import { getPathRewriteRules, getRollupInput } from './script/utils/multi-page';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  ...(isProd
    ? {
        root: "src/pages",
      }
    : {}),
  plugins: [
    svelte(),
    {
      name: "path-rewrite-plugin",
      async configureServer(server) {
        server.middlewares.use(
          history({
            htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
            disableDotRule: false,
            rewrites: await getPathRewriteRules(),
          })
        );
      },
    },
  ],
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    ...(isProd
      ? {
          outDir: "../../dist",
        }
      : {}),
    rollupOptions: {
      input: await getRollupInput(isProd),
    },
  },
});
