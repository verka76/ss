const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/styles.scss";'
      }
    }
  },
  transpileDependencies: true
})
