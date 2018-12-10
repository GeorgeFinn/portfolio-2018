const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  entry: {
    main: [
      "webpack-hot-middleware/client?reload=true",
      "./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    hot: true,
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }]},
      { test: /\.(jpg|svg)$/, use: [
          {
            loader: "file-loader", options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.ejs",
      inject: true,
      title: "georgefinn"
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    })
  ]
};
