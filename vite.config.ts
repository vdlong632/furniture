import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true
      },
      include: '**/*.svg'
    })
  ],
  preview: {
    allowedHosts: [
      'allskin-clinic.eddevs.org',
      'https://procompromise-unmilted-francisco.ngrok-free.dev/api/'
    ]
  },
  server: {
    host: true,
    port: 3000,
    open: true,
    allowedHosts: true
  },
  build: {
    outDir: 'build'
  }
});
