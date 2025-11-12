import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: '../../dist/client',
      sourcemap: true,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        input: {
          splash: 'splash/splash.html',
          game: 'game/game.html',
        },
        output: {
          manualChunks: {
            phaser: ['phaser'],
          },
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name][extname]',
          sourcemapFileNames: '[name].js.map',
        },
      },
      ...(mode === 'production' && {
        minify: 'terser',
        terserOptions: {
          compress: {
            passes: 2,
          },
          mangle: true,
          format: {
            comments: false,
          },
        },
      }),
    },
  };
});
