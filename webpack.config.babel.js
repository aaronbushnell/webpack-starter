let path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin"),
    pcImport = require('postcss-import'),
    pcNested = require('postcss-nested'),
    pcMixins = require('postcss-mixins'),
    pcColors = require('postcss-color-function'),
    pcHexrgba = require('postcss-hexrgba'),
    pcVars = require('postcss-simple-vars'),
    pcAutoprefixer = require('autoprefixer');

const filePath = process.env.NODE_ENV ? "dist" : "app";

module.exports = {
  devtool: process.env.NODE_ENV ? "" : "source-map",

  entry: {
    app: `./${filePath}/components/App.js`,
    vendor: `./${filePath}/components/Vendor.js`
  },

  output: {
    path: __dirname + `/${filePath}/_scripts/`,
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", ["css-loader", "postcss-loader"])
      }
    ]
  },

  postcss: function () {
    return [
      pcImport,
      pcVars,
      pcMixins,
      pcNested,
      pcColors,
      pcHexrgba,
      pcAutoprefixer
    ];
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
