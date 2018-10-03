const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/i,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      inject: true,
      hash: false,
      minify: {
        removeComments:   true,
        collapseWhitespace:   true,
        minifyJS:   true,
        minifyCSS:  true,
      },
    }),
  ],
})