const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir:'./',
  outputDir:'docs',
  publicPath:'./'
}
)
