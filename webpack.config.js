const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: true,
      terserOptions: {
        compress: false,
        mangle: true
      }
    })]
  }
}
