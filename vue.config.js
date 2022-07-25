const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // Vue 兼容 IE,可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖
  transpileDependencies: true,
  // 关闭eslint校验工具
  lintOnSave: false,
  // 配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn"
      }
    }
  }
})
