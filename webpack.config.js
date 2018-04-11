const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = () => ({
  entry: {
    main: [
      'babel-polyfill',
      './src/index.js',
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
})