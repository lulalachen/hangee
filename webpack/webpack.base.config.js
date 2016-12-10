const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const localIdentName = '[name]__[local]___[hash:base64:5]'
const OUTPUT_PATH = process.env.OUTPUT_PATH || 'build'

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.resolve(__dirname, '../src/scripts/client.js'),
  ],

  output: {
    path: path.resolve(__dirname, `../${OUTPUT_PATH}`),
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],

  resolve: {
    alias: {
      images: path.resolve(__dirname, '../src/images'),
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        loader: `style!css-loader?modules&importLoaders=1&localIdentName=${localIdentName}!postcss-loader`,
      },
      { test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /.\.json$/,
        loader: 'json'
      }
    ],
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
}
