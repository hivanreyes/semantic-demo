const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: ['./client/index.jsx'],
  output: {
    filename: './client/bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './client/assets', from: '**/*', to: './assets' },
      { context: './client/fonts', from: '*', to: './fonts' },
    ], { ignore: ['*.scss'] }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      loaders.js,
      loaders.jsx,
      loaders.css,
      loaders.sass,
      loaders.png,
      loaders.jpg,
      loaders.fonts,
      loaders.svg,
      loaders.gif,
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'client'),
      'node_modules',
    ],
  },
};
