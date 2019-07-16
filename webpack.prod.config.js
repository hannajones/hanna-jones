const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const APP = __dirname + '/app';
const BUILD = __dirname + '/build';
const PUBLIC = __dirname + '/app/public';
const TEMPLATE = __dirname + '/app/index.html'

const PACKAGE = Object.keys(
  require('./package.json').dependencies
);

module.exports = {
  entry: {
    app: APP,
    vendor: PACKAGE
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss', '.html', '.svg']
  },
  output: {
    path: BUILD,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: APP
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CleanPlugin([BUILD]),
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      { from: PUBLIC, to: BUILD }
    ],
    {
      ignore: [
        '.DS_Store'
      ]
    })
  ]
}
