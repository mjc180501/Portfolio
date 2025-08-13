import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    cssCodeSplit: true, // This creates separate CSS files per component
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep CSS files with more descriptive names
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});