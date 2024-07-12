import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
      { find: '@ui', replacement: fileURLToPath(new URL('./src/ui', import.meta.url)) },
      { find: '@routes', replacement: fileURLToPath(new URL('./src/routes', import.meta.url)) },
      { find: '@public', replacement: fileURLToPath(new URL('./public', import.meta.url)) },
    ],
  },
});
