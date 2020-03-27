module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData:
          '@import "@/assets/scss/_functions.scss"; @import "@/assets/scss/_variables.scss";'
      }
    }
  },
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true
  },
  lintOnSave: process.env.NODE_ENV !== "production"
};
