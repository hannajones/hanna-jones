const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

const APP = __dirname + '/src';
const BUILD = __dirname + '/build';
const TEMPLATE = __dirname + '/src/index.html'

module.exports = {
  entry: {
    app: APP,
  },
  output: {
    path: BUILD,
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.html', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: [
          /node_modules/
        ],
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      },
      {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: [
            {
                loader: 'url-loader?limit=1&mimetype=image/svg+xml'
            },
            {
                loader: 'svgo-loader',
                options: {
                    plugins: [
                      {removeTitle: true},
                      {convertColors: {shorthex: false}},
                      {convertPathData: false}
                    ]
                  }
            }
        ]
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
    progress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    }),
  ]
};
