import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./util/styles/_main.scss" as *;`,
      },
    },
  },
});
