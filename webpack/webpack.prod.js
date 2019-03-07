const merge = require('webpack-merge');
const dotenv = require('dotenv');
const webpack = require('webpack');
const common = require('./webpack.common.js');

dotenv.config();

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        FACEBOOK_URL: JSON.stringify(process.env.FACEBOOK_URL),
        GOOGLE_URL: JSON.stringify(process.env.GOOGLE_URL),
        LINKEDIN_URL: JSON.stringify(process.env.LINKEDIN_URL),
        TWITTER_URL: JSON.stringify(process.env.TWITTER_URL),
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        BASE_URL_CB: JSON.stringify(process.env.BASE_URL_CB),
        CLOUDINARY_UPLOAD_PRESET: JSON.stringify(process.env.CLOUDINARY_UPLOAD_PRESET),
        CLOUDINARY_API_KEY: JSON.stringify(process.env.CLOUDINARY_API_KEY),
        CLOUDINARY_USERNAME: JSON.stringify(process.env.CLOUDINARY_USERNAME)
      }
    })
  ]
});
