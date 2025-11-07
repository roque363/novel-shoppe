import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/novel-shoppe/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    globals: true,
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
