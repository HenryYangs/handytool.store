import {resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import history from 'connect-history-api-fallback';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  ...(isProd ? {
    root: 'src/pages',
  } : {}),
  plugins: [
    svelte(),
    {
      name: 'path-rewrite-plugin',
      configureServer(server) {
        server.middlewares.use(
          history({
            htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
            disableDotRule: false,
            rewrites: [
              {
                from: '/contact',
                to: '/src/pages/contact/index.html'
              },
              {
                from: '/',
                to: '/src/pages/home/index.html'
              }
            ]
          })
        );
      },
    }
  ],
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    ...(isProd ? {
      outDir: '../../dist',
    } : {}),
    rollupOptions: {
      input: {
        main: isProd ? '/home/index.prod.html' : resolve(__dirname, '/src/pages/home/index.html'),
        contact: isProd ? '/contact/index.prod.html' : resolve(__dirname, '/src/pages/contact/index.html'),
      },
      output: {
        htmlFileName: 'index.html'
      }
    },
  },
});
