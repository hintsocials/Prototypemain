import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ({ mode }) => {
  process.env = process.env || {};
  const env = Object.keys(process.env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(process.env[key]);
    return acc;
  }, {});

  return defineConfig({
    plugins: [react()],
    server: {
      port: process.env.PORT || 3000,
      host: '0.0.0.0', // Bind to all network interfaces
    },
    base: process.env.BASE_URL || '/',
    resolve: {
      alias: {
        '/@/': __dirname,
      },
    },
    define: {
      ...env,
    },
  });
};
