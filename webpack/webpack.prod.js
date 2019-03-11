const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL)
      }
    })
  ]
});
