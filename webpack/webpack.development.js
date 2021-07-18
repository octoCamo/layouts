const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    watchContentBase: true,
    host: '0.0.0.0',
    port: 9002,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          outputPath: 'images',
          name: '[name].[ext]',
        }
      },
    ]
  }
})