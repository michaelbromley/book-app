import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'client',
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});