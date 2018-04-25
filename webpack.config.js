/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const path = require('path');

const webpack = require('webpack');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: ['./client/index.jsx'],
  target: 'web',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
  ],
  module: {
    rules: [
      loaders.js,
      loaders.jsx,
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, './client'),
      path.resolve(__dirname, './'),
      path.resolve(__dirname, './config/frontend'),
      'node_modules',
    ],
    alias: {
      frontendConfig: path.resolve(__dirname, './config/frontend/development.json'),
    },
  },
};
