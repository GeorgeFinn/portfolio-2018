const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require('webpack');
const path = require('path');

const { NODE_ENV } = process.env;

module.exports = {
  devtool: 'source-map',
  entry: [
      path.resolve(__dirname, 'src/client/index.js'),
      'webpack-hot-middleware/client?reload=true'
    ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.html$/, use: [{loader: 'html-loader', options: { minimize: true }}]},
      { test: /\.(jpg|svg)$/, loader: 'file-loader'},
      {test: /\.ico$/i, loader: 'file?name=[name].[ext]'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      title: 'georgefinn',
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      favicon: 'favicon.ico'
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip"
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    overlay: true,
    stats: {
      colors: true
    }
  }
};
