let path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin"),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

const filePath = process.env.NODE_ENV ? "dist" : "app";

module.exports = {
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
    return [ precss, autoprefixer ];
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
