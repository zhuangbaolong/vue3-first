import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { proxyRefs } from 'vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true, //运行自动打开浏览器
    port: 9000,
    cors: true, //允许跨域
    proxy: {
      "/api": {
        target: "http://localhost:9091", //后台接口
        changeOrigin: true, //允许跨域
        ws: true, //开启websockets代理
        secure: false, //https接口需要配置,验证ssl证书
        rewrite: (path) =>path.replace(/^\/api/,"") //重写传过来path路径
      }
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
});
