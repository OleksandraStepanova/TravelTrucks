import { defineConfig } from 'vite';
import * as glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     historyApiFallback: true,
//   },
// });

// // import { defineConfig } from 'vite';

// // export default defineConfig({
// //   build: {
// //     rollupOptions: {
// //       input: {
// //         main: 'index.html',
// //         catalog: 'catalog.html',
// //       },
// //     },
// //   },
// // });
