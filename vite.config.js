import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        svgr(),
        react(),
    ],
    ssr: {
        noExternal: [
            'laravel-vite-plugin',
            'react-icons',
            '@inertiajs/server',
            'react-input-mask'
        ],
    },
});
