var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: false,
  entry: [
    'eventsource-polyfill',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'assets/',
    filename: 'app.js',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass'] },
      { test: /\.svg$/, loader: 'file-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};