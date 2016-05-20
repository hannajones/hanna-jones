const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP = __dirname + '/app';
const BUILD = __dirname + '/build';
const STYLE = __dirname + '/app/style.css';

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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel?cacheDdirectory'],
        include: APP,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader',
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