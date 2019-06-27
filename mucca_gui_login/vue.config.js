module.exports = {
  devServer: {
    public: "localhost",
  },
  runtimeCompiler:true,
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  }
}
