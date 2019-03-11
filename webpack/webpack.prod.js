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
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        BASE_URL_CB: JSON.stringify(process.env.BASE_URL_CB),
        CLOUDINARY_UPLOAD_PRESET: JSON.stringify(process.env.CLOUDINARY_UPLOAD_PRESET),
        CLOUDINARY_API_KEY: JSON.stringify(process.env.CLOUDINARY_API_KEY),
        CLOUDINARY_USERNAME: JSON.stringify(process.env.CLOUDINARY_USERNAME)
      }
    })
  ]
});
