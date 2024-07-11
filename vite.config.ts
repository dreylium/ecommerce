import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@lib': '/src/lib',
      '@ui': '/src/ui',
      '@routes': '/src/routes',
      '@src': '/src',
      '@public': '/public',
    },
  },
});
