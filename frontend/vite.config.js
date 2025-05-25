import { fileURLToPath, URL } from 'node:url'
 
 import { defineConfig } from 'vite'
 import vue from '@vitejs/plugin-vue'
 import vueDevTools from 'vite-plugin-vue-devtools'
 import Components from 'unplugin-vue-components/vite'
 import fs from 'fs';
 
 
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
     https: {
         key: fs.readFileSync('../../../etc/letsencrypt/live/tseh-game.ru/privkey.pem'),
         cert: fs.readFileSync('../../../etc/letsencrypt/live/tseh-game.ru/fullchain.pem')
     },
     headers: {
         'Content-Security-Policy': `script-src 'self' https://telegram.org;`
     },
     port: 443, // Your desired port
     host: '0.0.0.0', // Optional: Allow external access
     proxy: {
       '/api': 'http://localhost:3000/',
       '/cafe': {
          target: 'http://localhost:5500',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/cafe/, '/'),
        },
        '/assets': 'http://localhost:5500/',
        '/order': 'http://localhost:5500/',
     //   '/api': {
     //     target: 'http://localhost:3000/', // 0.0.0.0 for real server?
     //     changeOrigin: true,
       }
     }
   
 //   build: { // do not need
 //     target: 'esnext' // Required for Telegram Web Apps
 })