const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devServer: {
    publicPath: '/build',
    proxy: {
      '/api/': 'http://localhost:3000'
    },
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }

};

