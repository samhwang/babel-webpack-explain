const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    path: path.join(__dirname, 'webpackOutput'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};