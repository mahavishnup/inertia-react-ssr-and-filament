import { defineConfig } from 'vite'
import laravel, { refreshPaths } from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx', 'resources/filament/css/app.css', 'resources/filament/js/app.js', 'resources/filament/js/echo.js'],
            ssr: 'resources/js/ssr.jsx',
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
                'app/Tables/Columns/**',
            ],
        }),
        react(),
    ],
});
