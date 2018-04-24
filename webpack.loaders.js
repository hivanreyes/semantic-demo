module.exports =
{
  js: {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react'],
    },
  },
  jsx: {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /(node_modules)/,
    query: {
      presets: ['es2015', 'react'],
    },
  },
};
