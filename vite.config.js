// vite.config.js - optimisations
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
    build: {
        // Minification plus agressive
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Retire les console.log en prod
            }
        },
        
        // Taille maximale avant warning
        chunkSizeWarningLimit: 1000,
    },
    // Optimisation des images
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
})