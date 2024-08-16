const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_API_BASE_URL, // 백엔드 API 서버 주소
        changeOrigin: true
      },
    },
  },
})
