const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 5000,
    contentBase: './dist'
  },
  plugins: [
    new Dotenv()
  ]
});