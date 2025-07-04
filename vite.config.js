import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@components': path.resolve('src/components'),
            '@styles': path.resolve('src/styles'),
            '@util': path.resolve('src/util'),
            '@svg': path.resolve('public/assets/svg'),
            '@animations': path.resolve('public/assets/animations')
        }
    }
});