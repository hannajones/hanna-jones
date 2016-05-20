const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP = __dirname + '/app';
const BUILD = __dirname + '/build';
const STYLE = __dirname + '/app/styles.css';

module.exports = {
  entry: {
    app: APP,
    style: STYLE
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/, 
        loaders: ['style', 'css'],
        include: APP
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: 'errors-only',

    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Hanna-Jones',
      appMountId: 'app',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};