import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    Components({
        // Custom directory scanner
        dirs: [
          'src/components',
          'src/tabs',
        ],
        
        // Allow component overrides
        allowOverrides: true,
        
        // Custom file extensions
        extensions: ['vue', 'tsx'],
        
        // Exclude components
        exclude: [/node_modules/, /\.git/]
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 443, // Your desired port
    host: '0.0.0.0' // Optional: Allow external access
  }
})


