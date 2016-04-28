let path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin"),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: "./dist/components/App.js"
  },

  output: {
    path: __dirname + '/dist/_scripts/',
    publicPath: '/_scripts/',
    filename: "[name].js",
    chunkFilename: "[name]_[chunkhash].js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style", "css!postcss")
      }
    ]
  },

  postcss: function () {
    return [
      precss,
      autoprefixer
    ];
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
