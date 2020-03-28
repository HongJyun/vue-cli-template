module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData:
          '@import "@/scss/_functions.scss"; @import "@/scss/_variables.scss";'
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
