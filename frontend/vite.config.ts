import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify('api-key-this-is-not-used-can-be-ignored!'),
      },
      
      // Performance optimizations
      build: {
        target: 'ES2020',
        // Code splitting for better caching
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              if (id.includes('node_modules/react')) {
                return 'vendor-react';
              }
              if (id.includes('node_modules/lucide-react')) {
                return 'vendor-lucide';
              }
            },
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/png|jpe?g|gif|svg/.test(ext)) {
                return `images/[name]-[hash][extname]`;
              } else if (/woff|woff2|eot|ttf|otf/.test(ext)) {
                return `fonts/[name]-[hash][extname]`;
              } else if (ext === 'css') {
                return `css/[name]-[hash][extname]`;
              }
              return `[name]-[hash][extname]`;
            },
          },
        },
        chunkSizeWarningLimit: 1000,
        reportCompressedSize: true,
      },

      // Optimization for JavaScript dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
        exclude: ['node_modules'],
      },

      server: {
        proxy: {
          '/api-proxy': 'http://localhost:5000',
          '/ws-proxy': { target: 'ws://localhost:5000', ws: true },
        },
      },

      plugins: [
        react({
          // Automatic JSX runtime
          jsxRuntime: 'automatic',
        }),
      ],

      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
