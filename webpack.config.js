/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  entry: {
    app: './src/app/index.js',
  },
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: '[name].bundle-[hash].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate?add=true!babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(svg|woff|woff2|ttf|eot|ico|jpg|jpeg|png|gif)$/, loader: 'file?name=[name]-[hash].[ext]' },
      { test: /manifest.json$/, loader: 'file?name=[name]-[hash].[ext]!web-app-manifest' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: '[name].bundle-[hash].js',
      minChunks: (module) => {
        const userRequest = module.userRequest;
        if (typeof userRequest !== 'string') {
          return false;
        }
        return userRequest.indexOf('node_modules') >= 0;
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
    }),
    new LiveReloadPlugin(),
    new OfflinePlugin(),
  ],
};
