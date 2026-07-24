import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            png: { quality: 80 },
            jpeg: { quality: 80 },
            webp: { quality: 80 },
        }),
    ],
    base: '/portfolio/',
    build: {
        chunkSizeWarningLimit: 1000,
    },
    // Si vous utilisez rolldown/oxc dans Vite v7+
    oxc: {
        drop: ['console', 'debugger'],
    }
})