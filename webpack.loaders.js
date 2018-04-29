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
  css: {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
  },
  sass: {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
      'postcss-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          modules: true,
          resources: [
            './client/fonts/_fonts.scss',
            './client/styles/_colors.scss',
            './client/styles/**/*.scss',
          ],
        },
      },
    ],
  },
  png: {
    test: /\.png$/,
    loader: 'url-loader?limit=100000',
  },
  jpg: {
    test: /\.jpg$/,
    loader: 'file-loader',
  },
  gif: {
    test: /\.gif$/,
    loader: 'file-loader',
  },
  fonts: {
    test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]',
  },
  json: {
    test: /\.json$/,
    loader: 'file-loader',
  },
  svg: {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
  },
};
