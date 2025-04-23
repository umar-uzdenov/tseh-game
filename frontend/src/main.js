import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import express from 'express'


const app = createApp(App)

// const api = express()
// api.get('/test', (req, res) => {
//     res.json({ message: 'Hello from Express!' });
// })
// app.use(api)


app.use(createPinia())

app.mount('#app')






// import path from 'path'

// API routes
// ;

// Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../dist')));
//   // Handle client-side routing
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist', 'index.html'));
//   });
// }

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// export default app


// export default 
// defineConfig ({
//     server: {
//         cors : {
//             origin: 'http://my-backend.example.com',
//         },
//     },
//     build: {
//         manifest: true,
//         rollupOptions: {
//             input: '/path/to/main.js',
//         },
//     },
// })