'use strict'
const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "..", "dist"), // 打包后的输出目录
    filename: '[name].js', // 打包之后生成的文件名，可以随意写。
    libraryExport: "default",
    library: "SimpleDialog",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
