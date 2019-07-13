'use strict'
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'none',
  entry: {
    "simple-dialog": "./src/dialog/dialog.ts",
    "simple-dialog.min": "./src/dialog/dialog.ts",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // 将css提取为单独的文件
          "css-loader", // 将 css 转化成 js 模块
          'postcss-loader', // 处理 css 前缀
          "sass-loader" // 将 Sass/Scss 编译成 css
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.min\.css$/,
      })
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "simple-dialog.css",
      chunkFilename: "simple-dialog.css"
    }),
    new MiniCssExtractPlugin({
      filename: "simple-dialog.min.css",
      chunkFilename: "simple-dialog.css"
    })
  ]
});

module.exports = prodWebpackConfig;




