const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  mode: "development",
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      cache: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      GeneralComponents: path.resolve(__dirname, "src/general_components/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
      Images: path.resolve(__dirname, "src/images/"),
      Views: path.resolve(__dirname, "src/views/"),
    },
  },
}
