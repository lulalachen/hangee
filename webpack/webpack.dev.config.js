const path = require('path')
const baseConfig = require('./webpack.base.config.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  ...baseConfig,

  entry: [
    'webpack-hot-middleware/client?reload=true',
    ...baseConfig.entry,
  ],

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
}
