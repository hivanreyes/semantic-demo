const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: './client/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      loaders.js,
      loaders.jsx,
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'client'),
      'node_modules',
    ],
    modulesDirectories: ['node_modules'],
    root: [
      './',
      path.join(__dirname, 'client'),
    ],
  },
};
