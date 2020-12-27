const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './index.jsx',
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public', 'javascript'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      use: ['babel-loader'],
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
    }],
  },
}
