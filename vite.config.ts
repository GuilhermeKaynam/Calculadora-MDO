import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'core-js'],
  },
  build: {
    commonjsOptions: {
      include: [/core-js/, /node_modules/],
    },
  },
});
