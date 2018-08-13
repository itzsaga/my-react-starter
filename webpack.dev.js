const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      inject: true,
      hash: false,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        minifyJS: false,
        minifyCSS: false,
      },
    }),
  ],
})