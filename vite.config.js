import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set the base path to your repository name
  base: '/Portfolio/',
  // Explicitly tell Vite to handle assets paths correctly
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // This is usually the default, but good to be explicit
  },
});