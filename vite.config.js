const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        technology: path.resolve(__dirname, 'technology.html'),
        company: path.resolve(__dirname, 'company.html'),
      },
    },
  },
})
