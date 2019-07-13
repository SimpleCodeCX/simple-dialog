'use strict'
const path = require('path');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require("webpack");

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: "source-map",
  mode: "development", // 开发模式
  entry: {
    app: "./examples/example1/example1.ts",
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 8000,
    compress: true,
    hot: true,
    overlay: true,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/examples/example1/example1.html" }]
    }
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader", // 将 css 转化成 js 模块
          'postcss-loader', // 处理 css 前缀
          "sass-loader" // 将 Sass/Scss 编译成 css
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({ // 自动生成html,并且自动导入所有依赖同步包
      filename: "index.html",
      template: path.resolve(__dirname, "../examples/example1", "example1.html"),
      minify: {
        collapseWhitespace: true // 压缩
      }
    }),
  ]
});
module.exports = devWebpackConfig;
