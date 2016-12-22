/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const argv = require('yargs').argv;
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const OfflinePlugin = require('offline-plugin');

// environment (resolved from command line arguments, 'dev' by default)
const env = argv.env || 'dev';
// source folder
const src = path.join(__dirname, 'src');
// output folder
const dist = path.join(__dirname, 'dist');
// index.html template
const template = path.join(src, 'index.ejs');
// application entry point
const entry = path.join(src, 'app', 'index.js');

module.exports = {
  entry: {
    app: entry,
  },
  devtool: 'source-map',
  output: {
    path: dist,
    filename: '[name].bundle-[hash].js',
  },
  resolve: {
    alias: {
      // environment configuration resolution
      $env: path.join(src, 'environments', `environment.${env}.js`),
    },
    root: [src],
  },
  module: {
    loaders: [
      // transpile using babel, add angular dependency injections
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      // inject css in page
      { test: /\.css$/, loader: 'style!css' },
      // transpile sass, inject css in page
      { test: /\.scss$/, loader: 'style!css!sass' },
      // load templates
      { test: /\.html$/, loader: 'html' },
      // copy fonts and images
      { test: /\.(svg|woff|woff2|ttf|eot|ico|jpg|jpeg|png|gif)$/, loader: 'file?name=[name]-[hash].[ext]' },
      // copy manifest.json
      { test: /manifest.json$/, loader: 'file?name=[name]-[hash].[ext]!web-app-manifest' },
    ],
  },
  plugins: [
    // clean dist folder
    new CleanWebpackPlugin([dist]),
    // dedupe dependencies
    new webpack.optimize.DedupePlugin(),
    // package vendors in separate bundle
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
    // build index.html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template,
    }),
    // build service worker
    new OfflinePlugin(),
    // live reload page
    new LiveReloadPlugin(),
  ],
};
